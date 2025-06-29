import TagCard from "@/components/cards/tag-card";
import DataRenderer from "@/components/data-render";
import CommonFilter from "@/components/filters/common-filter";
import Pagination from "@/components/pagination";
import LocalSearch from "@/components/search/local-search";
import { TagFilters } from "@/constants/filters";
import ROUTES from "@/constants/routes";
import { EMPTY_TAGS } from "@/constants/states";
import { getTags } from "@/lib/actions/tag.action";

const Tags = async ({ searchParams }: RouteParams) => {
    const { page, pageSize, query, filter } = await searchParams;

    const { success, data, error } = await getTags({
        page: Number(page) || 1,
        pageSize: Number(pageSize) || 9,
        query,
        filter,
    });

    const { tags, isNext } = data || {};

    return (
        <>
            <h1 className="h1-bold text-dark100_light900 text-3xl">Tags</h1>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearch
                    route={ROUTES.TAGS}
                    imgSrc="/icons/search.svg"
                    placeholder="Search tags..."
                    otherClasses="flex-1"
                />

                <CommonFilter
                    filters={TagFilters}
                    otherClasses="sm:min-w-[170px] sm:min-h-[50px]"
                />
            </div>

            <DataRenderer
                success={success}
                error={error}
                data={tags}
                empty={EMPTY_TAGS}
                render={(tags) => (
                    <div className="mt-10 flex w-full flex-wrap gap-4">
                        {tags.map((tag) => (
                            <TagCard key={tag._id} {...tag} />
                        ))}
                    </div>
                )}
            />

            <Pagination page={page} isNext={isNext || false} />
        </>
    );
};

export default Tags;
