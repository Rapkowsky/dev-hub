import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section>
            <h1 className="h1-bold text-dark100_light900 mb-10">
                Edit Profile
            </h1>

            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="mb-[36px]">
                    <Skeleton className="mb-[12px] h-6 w-[90px]" />
                    <Skeleton className="h-[50px] w-full" />
                </div>
            ))}

            <Skeleton className="mb-[12px] h-6 w-[90px]" />
            <Skeleton className="h-[130px] w-full" />
            <Skeleton className="mt-[60px] ml-auto h-[36px] w-[79px]" />
        </section>
    );
};

export default Loading;
