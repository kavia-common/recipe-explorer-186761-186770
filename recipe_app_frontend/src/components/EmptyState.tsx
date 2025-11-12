type Props = { title?: string; description?: string };

export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or explore popular categories.",
}: Props) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
}
