import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <h1 className="h1-bold text-dark100_light900">Tags</h1>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <Skeleton className="h-[50px] w-full" />
                <Skeleton className="h-[40px] w-full max-w-[154px] sm:h-[50px]" />
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Skeleton
                        key={item}
                        className="xs:w-[230px] h-60 w-full rounded-2xl"
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
