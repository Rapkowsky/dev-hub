import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
                <div className="flex flex-col items-start gap-4 lg:flex-row">
                    <Skeleton className="size-[140px] rounded-full object-cover" />

                    <div className="mt-3">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="mt-6 h-6 w-32" />

                        <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                            {[1, 2, 3].map((item) => (
                                <Skeleton
                                    key={item}
                                    className="h-6 w-24 rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
                    <Skeleton className="h-10 w-44" />
                </div>
            </div>

            <Skeleton className="mt-9 h-6 w-[90px] sm:mt-14" />

            <div className="xs:grid-cols-2 mt-5 grid w-full gap-5 md:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="shadow-light-300 dark:shadow-dark-200 flex flex-wrap items-center justify-start gap-4 rounded-md border p-6"
                    >
                        <Skeleton className="h-[60px] w-[40px]" />
                        <div>
                            <Skeleton className="h-6 w-[80px]" />
                            <Skeleton className="mt-2 h-4 w-[100px]" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full gap-10 lg:flex">
                <div className="flex-[1.6]">
                    <div className="mt-8 flex gap-2">
                        <Skeleton className="h-[42px] w-[85px]" />
                        <Skeleton className="h-[42px] w-[85px]" />
                    </div>
                    <Skeleton className="mt-8 h-[260px] w-full sm:h-[183px]" />

                    <div className="mt-5 flex justify-center gap-2">
                        <Skeleton className="h-9 w-9" />
                        <Skeleton className="h-9 w-[65px]" />
                    </div>
                </div>

                <div className="hidden flex-1 lg:block">
                    <Skeleton className="mt-8 h-[42px] w-[85px]" />

                    <Skeleton className="mt-8 h-[260px] w-full sm:h-[183px]" />

                    <div className="mt-5 flex justify-center gap-2">
                        <Skeleton className="h-9 w-9" />
                        <Skeleton className="h-9 w-[65px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loading;
