import Link from "next/link";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
];

export default function Sidebar() {
  return (
    <aside
      className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 md:p-5"
      aria-label="Recipe categories"
    >
      <h2 className="text-sm font-semibold text-gray-700 mb-3">Categories</h2>
      <nav className="grid gap-2" aria-label="Categories">
        {categories.map((c) => (
          <Link
            key={c}
            href={`/search?query=${encodeURIComponent(c)}`}
            className="inline-flex items-center justify-between rounded-lg border border-transparent bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <span>{c}</span>
            <span aria-hidden>›</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
