import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <div className="flex">
                <div className="ml-auto flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <Skeleton key={item} className="h-5 w-5" />
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-[60px]" />
            </div>

            <Skeleton className="mt-5 h-[50px] w-full" />

            <div className="mt-7 flex gap-3">
                <Skeleton className="h-5 w-[150px]" />
                <Skeleton className="h-5 w-[30px]" />
                <Skeleton className="h-5 w-[40px]" />
            </div>

            <Skeleton className="mt-8 h-[60px] w-full" />
            <div className="mt-8 flex gap-2">
                <Skeleton className="h-[30px] w-[115px]" />
                <Skeleton className="h-[30px] w-[100px]" />
                <Skeleton className="h-[30px] w-[120px]" />
            </div>

            <div className="mt-10 flex w-full justify-between">
                <Skeleton className="h-[40px] w-[143px]" />
                <Skeleton className="h-[40px] w-[153px]" />
            </div>

            <Skeleton className="mt-20 h-[227px] w-full rounded-md md:h-[183px]" />
            <div className="mt-5 flex justify-center gap-2">
                <Skeleton className="h-9 w-9" />
                <Skeleton className="h-9 w-[65px]" />
            </div>

            <div className="mt-10 flex w-full justify-between">
                <Skeleton className="h-[40px] w-[180px]" />
                <Skeleton className="h-[40px] w-[185px]" />
            </div>

            <Skeleton className="mt-8 h-[350px] w-full" />
            <Skeleton className="mt-[60px] ml-auto h-[36px] w-[150px]" />
        </section>
    );
};

export default Loading;
