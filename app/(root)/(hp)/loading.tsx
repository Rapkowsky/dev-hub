import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <div className="flex w-full flex-col justify-between gap-4 min-[375px]:flex-row sm:items-center">
                <Skeleton className="ml-auto h-10 w-33" />
            </div>

            <div className="mt-11 flex gap-5 max-sm:flex-col md:flex-col">
                <Skeleton className="h-[50px] w-full" />
                <Skeleton className="h-[40px] w-[153px] sm:hidden" />
                <Skeleton className="hidden h-[50px] w-[153px] sm:block md:hidden" />

                <div className="flex-start hidden gap-5 md:flex">
                    {[1, 2, 3, 4].map((item) => (
                        <Skeleton
                            key={item}
                            className="h-[36px] w-[100px] rounded-md"
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

            <div className="mt-10 flex justify-center gap-2">
                <Skeleton className="h-9 w-9" />
                <Skeleton className="h-9 w-[65px]" />
            </div>
        </section>
    );
};

export default Loading;
