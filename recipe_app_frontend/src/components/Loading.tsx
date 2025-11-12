export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center text-gray-600"
    >
      <div className="mx-auto mb-2 h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      Loading...
    </div>
  );
}
