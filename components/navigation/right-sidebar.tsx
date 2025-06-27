import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopTags } from "@/lib/actions/tag.actions";
import TagCard from "../cards/tag-card";
import DataRenderer from "../data-render";

const RightSidebar = async () => {
    const [
        { success, data: hotQuestions, error },
        { success: tagSuccess, data: tags, error: tagError },
    ] = await Promise.all([getHotQuestions(), getTopTags()]);

    return (
        <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

                <DataRenderer
                    data={hotQuestions}
                    empty={{
                        title: "No questions found",
                        message: "No questions have been asked yet.",
                    }}
                    success={success}
                    error={error}
                    render={(hotQuestions) => (
                        <div className="mt-7 flex w-full flex-col gap-[30px]">
                            {hotQuestions.map(({ _id, title }, index) => (
                                <Link
                                    key={_id}
                                    href={ROUTES.QUESTION(_id)}
                                    className="click-anim flex cursor-pointer items-center justify-between gap-7"
                                >
                                    <Image
                                        src={
                                            (index & 1) === 0
                                                ? "/icons/question-primary.svg"
                                                : "/icons/question-accent.svg"
                                        }
                                        alt="Question"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="body-medium text-dark500_light700 line-clamp-2">
                                        {title}
                                    </p>

                                    <Image
                                        src="/icons/chevron-right.svg"
                                        alt="Chevron"
                                        width={20}
                                        height={20}
                                        className="invert-colors"
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
                />
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

                <DataRenderer
                    data={tags}
                    empty={{
                        title: "No tags found",
                        message: "No tags have been created yet.",
                    }}
                    success={tagSuccess}
                    error={tagError}
                    render={(tags) => (
                        <div className="mt-7 flex flex-col gap-4">
                            {tags.map(({ _id, name, questions }) => (
                                <TagCard
                                    key={_id}
                                    _id={_id}
                                    name={name}
                                    questions={questions}
                                    showCount
                                    compact
                                />
                            ))}
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default RightSidebar;
