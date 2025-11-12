import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

type Props = { recipes: Recipe[] };

export default function RecipeGrid({ recipes }: Props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      role="list"
      aria-label="Recipes"
    >
      {recipes.map((r) => (
        <div key={r.id} role="listitem">
          <RecipeCard recipe={r} />
        </div>
      ))}
    </div>
  );
}
