import Sidebar from "@/components/Sidebar";
import RecipeGrid from "@/components/RecipeGrid";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import { getFeaturedRecipes } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getFeaturedRecipes();

  return (
    <>
      {/* Sidebar in the layout's left column via a grid overlap */}
      <div className="hidden md:block md:col-span-1 md:row-start-1 md:row-end-2 -mt-6">
        <Sidebar />
      </div>
      <section className="md:col-span-3 space-y-4">
        <header className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Recipes</h2>
            <p className="text-sm text-gray-500">Discover popular and seasonal picks.</p>
          </div>
        </header>

        {!data ? (
          <Loading />
        ) : data.length === 0 ? (
          <EmptyState title="No featured recipes" description="Please check back later." />
        ) : (
          <RecipeGrid recipes={data} />
        )}
      </section>
    </>
  );
}
