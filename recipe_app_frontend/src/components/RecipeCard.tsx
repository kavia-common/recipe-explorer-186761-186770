import Link from "next/link";
import { Recipe } from "@/types/recipe";

type Props = { recipe: Recipe };

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
      aria-label={`View ${recipe.title}`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-blue-700">
            {recipe.timeMinutes} mins
          </span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-amber-700">
            {recipe.difficulty}
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold text-gray-900 line-clamp-1">
          {recipe.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
