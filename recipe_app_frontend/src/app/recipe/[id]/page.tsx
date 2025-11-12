import { getRecipeById } from "@/lib/api";
import EmptyState from "@/components/EmptyState";

/**
PUBLIC_INTERFACE
Next.js dynamic route for recipe details.

- Accepts route params with an `id` segment.
- Fetches a recipe via the data client with API/mock fallback.
- Renders a hero image, metadata chips, description, ingredients, and steps.

Notes:
We intentionally avoid importing PageProps typing because Next.js v15 may type `params`
as a Promise in types-only constraints. Using `any` props and runtime normalization
prevents type errors during build while preserving strong typing in the data layer.
*/
export const dynamic = "force-dynamic";

type ParamsObject = { id?: string };

export default async function RecipeDetailPage(props: { params: Promise<ParamsObject> }) {
  // Next.js v15 PageProps may model params as a Promise; await it here
  const resolvedParams = await props.params;
  const id: string | undefined = resolvedParams?.id;

  const recipe = id ? await getRecipeById(id) : null;

  if (!recipe) {
    return (
      <section className="md:col-span-3">
        <EmptyState
          title="Recipe not found"
          description="The recipe you are looking for does not exist."
        />
      </section>
    );
  }

  return (
    <article className="md:col-span-4">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Hero */}
        <div className="aspect-[16/6] w-full overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 lg:p-8">
          <header className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-semibold text-gray-900">
              {recipe.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-blue-700">
                {recipe.timeMinutes} mins
              </span>
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-amber-700">
                {recipe.difficulty}
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-gray-700">
                {recipe.category}
              </span>
              {recipe.tags.map((t) => (
                <span
                  key={t}
                  className="ml-1 inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-gray-700"
                >
                  #{t}
                </span>
              ))}
            </div>
            <p className="mt-3 text-gray-700">{recipe.description}</p>
          </header>

          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-gray-900">
                Ingredients
              </h2>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </section>

            <section className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900">Steps</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-3 text-gray-700">
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
