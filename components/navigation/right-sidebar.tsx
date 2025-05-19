import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import TagCard from "../cards/tag-card";

const hotQuestions = [
    { _id: "1", title: "How to use React?" },
    { _id: "2", title: "What is Next.js?" },
    { _id: "3", title: "How to deploy a React app?" },
    { _id: "4", title: "What is TypeScript?" },
    { _id: "5", title: "How to use Redux?" },
    { _id: "6", title: "What is Tailwind CSS?" },
];

const popularTags = [
    { _id: "1", name: "React", questions: 100 },
    { _id: "2", name: "Next.js", questions: 80 },
    { _id: "3", name: "JavaScript", questions: 120 },
    { _id: "4", name: "CSS", questions: 60 },
    { _id: "5", name: "HTML", questions: 90 },
];

const RightSidebar = () => {
    return (
        <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map(({ _id, title }) => (
                        <Link
                            className="flex cursor-pointer items-center justify-between gap-7"
                            key={_id}
                            href={ROUTES.PROFILE(_id)}
                        >
                            <p className="body-medium text-dark500_light700">
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
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map(({ _id, name, questions }) => (
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
            </div>
        </section>
    );
};

export default RightSidebar;
