import Sidebar from "@/components/Sidebar";
import RecipeGrid from "@/components/RecipeGrid";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import { searchRecipes } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: { query?: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const query = (searchParams?.query ?? "").toString();
  const results = await searchRecipes(query);

  return (
    <>
      <div className="hidden md:block md:col-span-1 md:row-start-1 md:row-end-2 -mt-6">
        <Sidebar />
      </div>
      <section className="md:col-span-3 space-y-4">
        <header>
          <h2 className="text-2xl font-semibold text-gray-900">Search Results</h2>
          <p className="text-sm text-gray-500">
            {query ? `Showing results for “${query}”.` : "Showing all recipes."}
          </p>
        </header>

        {!results ? (
          <Loading />
        ) : results.length === 0 ? (
          <EmptyState
            title="No recipes match your search"
            description="Try a different term or explore categories on the left."
          />
        ) : (
          <RecipeGrid recipes={results} />
        )}
      </section>
    </>
  );
}
