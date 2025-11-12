import { Recipe } from "@/types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Lemon Herb Grilled Salmon",
    description:
      "Tender salmon fillets marinated with lemon, garlic, and fresh herbs. Perfect for a light dinner.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    tags: ["Dinner", "Seafood", "Healthy"],
    timeMinutes: 25,
    difficulty: "Easy",
    category: "Dinner",
    ingredients: [
      "4 salmon fillets",
      "2 lemons (zest and juice)",
      "3 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tbsp fresh dill, chopped",
      "Salt and pepper",
    ],
    steps: [
      "Whisk lemon juice, zest, garlic, olive oil, dill, salt, and pepper.",
      "Marinate salmon for 10–15 minutes.",
      "Preheat grill or pan to medium-high.",
      "Grill salmon 3–4 minutes per side until flaky.",
      "Serve with lemon wedges.",
    ],
  },
  {
    id: "2",
    title: "Creamy Mushroom Risotto",
    description:
      "Classic Italian risotto with sautéed mushrooms and parmesan. Rich and comforting.",
    image:
      "https://images.unsplash.com/photo-1476127399841-4a4f2b51d4f4?q=80&w=1200&auto=format&fit=crop",
    tags: ["Dinner", "Vegetarian"],
    timeMinutes: 40,
    difficulty: "Medium",
    category: "Vegetarian",
    ingredients: [
      "1 1/2 cups arborio rice",
      "4 cups vegetable stock (warm)",
      "2 cups mushrooms, sliced",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "1/2 cup white wine",
      "1/2 cup grated parmesan",
      "2 tbsp butter",
      "Olive oil, salt, pepper",
    ],
    steps: [
      "Sauté onion and garlic in olive oil until translucent.",
      "Add mushrooms; cook until browned. Remove half for garnish.",
      "Add rice; toast 1–2 minutes. Deglaze with white wine.",
      "Add warm stock 1/2 cup at a time, stirring until absorbed.",
      "Finish with butter and parmesan; season to taste.",
    ],
  },
  {
    id: "3",
    title: "Berry Breakfast Parfait",
    description:
      "Layers of Greek yogurt, fresh berries, and granola. A quick, nutritious breakfast.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    tags: ["Breakfast", "Vegetarian", "Gluten-Free"],
    timeMinutes: 10,
    difficulty: "Easy",
    category: "Breakfast",
    ingredients: [
      "2 cups Greek yogurt",
      "1 cup mixed berries",
      "1/2 cup granola (gluten-free if needed)",
      "1 tbsp honey",
      "Fresh mint (optional)",
    ],
    steps: [
      "In glasses, layer yogurt, berries, and granola.",
      "Drizzle with honey.",
      "Repeat layers and garnish with mint.",
    ],
  },
  {
    id: "4",
    title: "Vegan Buddha Bowl",
    description:
      "Colorful bowl with quinoa, roasted veggies, chickpeas, and tahini dressing.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    tags: ["Lunch", "Vegan", "Healthy"],
    timeMinutes: 30,
    difficulty: "Easy",
    category: "Vegan",
    ingredients: [
      "1 cup quinoa",
      "1 can chickpeas, drained",
      "2 cups mixed veggies (sweet potato, broccoli)",
      "2 tbsp olive oil",
      "1 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tsp maple syrup",
      "Salt, pepper, paprika",
    ],
    steps: [
      "Cook quinoa per package instructions.",
      "Roast veggies with olive oil, salt, pepper, paprika at 400°F (200°C) for 20–25 mins.",
      "Crisp chickpeas in pan with a little oil and salt.",
      "Whisk tahini, lemon juice, maple syrup with warm water to thin.",
      "Assemble bowl and drizzle dressing.",
    ],
  },
];

export function searchMock(query: string): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return mockRecipes;
  return mockRecipes.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      r.category.toLowerCase().includes(q)
  );
}

export function getMockById(id: string): Recipe | undefined {
  return mockRecipes.find((r) => r.id === id);
}
