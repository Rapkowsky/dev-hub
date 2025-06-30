import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <Skeleton className="mb-11 h-[42px] w-[70px]" />
            <Skeleton className="mb-3 h-[23px] w-full" />
            <Skeleton className="mb-2 h-[23px] w-full" />
            <Skeleton className="mb-2 h-[23px] w-full sm:hidden" />
            <Skeleton className="mb-2 h-[23px] w-full sm:hidden" />
        </section>
    );
};

export default Loading;
