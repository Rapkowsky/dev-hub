import Link from "next/link";
import { redirect } from "next/navigation";
import { after } from "next/server";
import React, { Suspense } from "react";

import ROUTES from "@/constants/routes";
import { getAnswers } from "@/lib/actions/answer.action";
import { getQuestion, incrementViews } from "@/lib/actions/question.action";
import { hasVoted } from "@/lib/actions/vote.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import AllAnswers from "@/components/answers/all-answers";
import TagCard from "@/components/cards/tag-card";
import { Preview } from "@/components/editor/preview";
import AnswerForm from "@/components/forms/answer-form";
import Metric from "@/components/metric";
import UserAvatar from "@/components/user-avatar";
import Votes from "@/components/votes/votes";

const QuestionDetails = async ({ params }: RouteParams) => {
    const { id } = await params;
    const { success, data: question } = await getQuestion({ questionId: id });

    after(async () => {
        await incrementViews({ questionId: id });
    });

    if (!success || !question) return redirect("/404");

    const {
        success: areAnswersLoaded,
        data: answersResult,
        error: answersError,
    } = await getAnswers({
        questionId: id,
        page: 1,
        pageSize: 10,
        filter: "latest",
    });

    const hasVotedPromise = hasVoted({
        targetId: question._id,
        targetType: "question",
    });

    const { author, createdAt, answers, views, tags, content, title } =
        question;

    return (
        <>
            <div className="flex-start w-full flex-col">
                <div className="flex w-full flex-col-reverse justify-between">
                    <div className="flex items-center justify-start gap-1">
                        <UserAvatar
                            id={author._id}
                            name={author.name}
                            className="size-[22px]"
                            fallbackClassName="text-[10px]"
                        />
                        <Link href={ROUTES.PROFILE(author._id)}>
                            <p className="paragraph-semibold text-dark300_light700">
                                {author.name}
                            </p>
                        </Link>
                    </div>

                    <div className="flex justify-end">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Votes
                                targetType="question"
                                upvotes={question.upvotes}
                                downvotes={question.downvotes}
                                targetId={question._id}
                                hasVotedPromise={hasVotedPromise}
                            />
                        </Suspense>
                    </div>
                </div>

                <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full">
                    {title}
                </h2>
            </div>

            <div className="mt-5 mb-8 flex flex-wrap gap-4">
                <Metric
                    imgUrl="/icons/clock.svg"
                    alt="clock icon"
                    value={` asked ${getTimeStamp(new Date(createdAt))}`}
                    title=""
                    textStyles="small-regular text-dark400_light700"
                />
                <Metric
                    imgUrl="/icons/message.svg"
                    alt="message icon"
                    value={answers}
                    title=""
                    textStyles="small-regular text-dark400_light700"
                />
                <Metric
                    imgUrl="/icons/eye.svg"
                    alt="eye icon"
                    value={formatNumber(views)}
                    title=""
                    textStyles="small-regular text-dark400_light700"
                />
            </div>

            <Preview content={content} />

            <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag: Tag) => (
                    <TagCard
                        key={tag._id}
                        _id={tag._id as string}
                        name={tag.name}
                        compact
                    />
                ))}
            </div>

            <section className="my-5">
                <AllAnswers
                    data={answersResult?.answers}
                    success={areAnswersLoaded}
                    error={answersError}
                    totalAnswers={answersResult?.totalAnswers || 0}
                />
            </section>

            <section className="my-5">
                <AnswerForm
                    questionId={question._id}
                    questionTitle={question.title}
                    questionContent={question.content}
                />
            </section>
        </>
    );
};

export default QuestionDetails;
