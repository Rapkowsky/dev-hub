import { Metadata } from "next";
import Link from "next/link";

import QuestionCard from "@/components/cards/question-card";
import DataRenderer from "@/components/data-render";
import CommonFilter from "@/components/filters/common-filter";
import HomeFilter from "@/components/filters/home-filter";
import Pagination from "@/components/pagination";
import LocalSearch from "@/components/search/local-search";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import ROUTES from "@/constants/routes";
import { EMPTY_QUESTION } from "@/constants/states";
import { getQuestions } from "@/lib/actions/question.action";

export const metadata: Metadata = {
    title: "DevHub | Home",
    description:
        "Discover different programming questions and answers with recommendations from the community.",
};

async function Home({ searchParams }: RouteParams) {
    const { page, pageSize, query, filter } = await searchParams;

    const { success, data, error } = await getQuestions({
        page: Number(page) || 1,
        pageSize: Number(pageSize) || 4,
        query,
        filter,
    });

    const { questions, isNext } = data || {};

    return (
        <>
            <section className="flex w-full flex-col justify-between gap-4 min-[375px]:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button
                    className="primary-gradient !text-light-900 min-h-[40px] w-fit! px-4 py-2"
                    asChild
                >
                    <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
                        Ask a Question
                    </Link>
                </Button>
            </section>

            <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearch
                    route={ROUTES.HOME}
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                    iconPosition="left"
                    otherClasses="flex-1"
                />

                <CommonFilter
                    filters={HomePageFilters}
                    otherClasses="sm:min-w-[170px] sm:min-h-[50px]"
                    containerClasses="md:hidden max-md:flex"
                />
            </section>

            <HomeFilter />

            <DataRenderer
                success={success}
                error={error}
                data={questions}
                empty={EMPTY_QUESTION}
                render={(questions) => (
                    <div className="mt-10 flex w-full flex-col gap-6">
                        {questions.map((question) => (
                            <QuestionCard
                                key={question._id}
                                question={question}
                            />
                        ))}
                    </div>
                )}
            />

            <Pagination page={page} isNext={isNext || false} />
        </>
    );
}

export default Home;
