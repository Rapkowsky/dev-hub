import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <Skeleton className="h-[42px] w-[130px]" />

            <Skeleton className="mt-11 h-[50px] w-full" />

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
