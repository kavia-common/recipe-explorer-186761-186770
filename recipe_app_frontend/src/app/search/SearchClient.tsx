"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import RecipeGrid from "@/components/RecipeGrid";
import Sidebar from "@/components/Sidebar";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import { searchRecipes } from "@/lib/api";
import { Recipe } from "@/types/recipe";

/**
PUBLIC_INTERFACE
SearchClient
Client-side component that reads the query string and loads search results.
This enables the page to be statically rendered while still supporting dynamic querying.
*/
export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = useMemo(() => (searchParams?.get("query") ?? "").toString(), [searchParams]);

  const [results, setResults] = useState<Recipe[] | null>(null);

  useEffect(() => {
    let mounted = true;
    setResults(null);
    searchRecipes(query).then((res) => {
      if (mounted) setResults(res);
    });
    return () => {
      mounted = false;
    };
  }, [query]);

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

        {results === null ? (
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
