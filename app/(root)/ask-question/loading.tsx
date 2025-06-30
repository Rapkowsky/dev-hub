import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <h1 className="h1-bold text-dark100_light900 mb-10">
                Ask a question
            </h1>
            <div className="mb-[36px]">
                <Skeleton className="mb-[12px] h-6 w-[90px]" />
                <Skeleton className="mt-5 h-[50px] w-full" />
                <Skeleton className="mb-[12px] h-6 w-full max-w-[450px]" />
            </div>

            <div className="mb-[36px]">
                <Skeleton className="mb-[12px] h-6 w-full max-w-[300px]" />
                <Skeleton className="mt-5 h-[390px] w-full" />
                <Skeleton className="mb-[12px] h-6 w-full max-w-[450px]" />
            </div>

            <div className="mb-[36px]">
                <Skeleton className="mb-[12px] h-6 w-[90px]" />
                <Skeleton className="mt-5 h-[50px] w-full" />
                <Skeleton className="mb-[12px] h-6 w-full max-w-[600px]" />
            </div>
            <Skeleton className="mt-[60px] ml-auto h-[36px] w-[150px]" />
        </section>
    );
};

export default Loading;
