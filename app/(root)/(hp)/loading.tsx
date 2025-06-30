import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <div className="justify-between gap-4 min-[375px]:flex">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>{" "}
                <Skeleton className="hidden h-10 w-33 min-[375px]:block" />
            </div>
            <div className="mt-5 flex w-full flex-col justify-between gap-4 min-[375px]:flex-row sm:items-center">
                <Skeleton className="h-10 w-33 min-[375px]:hidden" />
            </div>

            <div className="mt-7 flex gap-5 max-sm:flex-col md:flex-col">
                <Skeleton className="h-[50px] w-full" />
                <Skeleton className="h-[40px] w-[153px] sm:hidden" />
                <Skeleton className="hidden h-[50px] w-full max-w-[170px] sm:block md:hidden" />

                <div className="flex-start mt-5 hidden gap-5 md:flex">
                    {[1, 2, 3, 4].map((item) => (
                        <Skeleton
                            key={item}
                            className="h-[36px] w-[120px] rounded-md"
                        />
                    ))}
                </div>
            </div>

            <div className="mt-10 flex w-full flex-col gap-6">
                {[1, 2, 3, 4].map((item) => (
                    <Skeleton
                        key={item}
                        className="h-[227px] w-full rounded-md md:h-[183px]"
                    />
                ))}
            </div>

            <div className="mt-5 flex justify-center gap-2">
                <Skeleton className="h-9 w-9" />
                <Skeleton className="h-9 w-[65px]" />
            </div>
        </section>
    );
};

export default Loading;
