import { Suspense } from "react";
import SearchClient from "./SearchClient";

/**
PUBLIC_INTERFACE
Search page entrypoint.
Static page that mounts a client component to read query string and fetch results on the client.
This design avoids dynamic rendering at build time and supports static export.
Also wraps client component in Suspense to satisfy useSearchParams requirement.
*/
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="md:col-span-3"><div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center text-gray-600">Loading search...</div></div>}>
      <SearchClient />
    </Suspense>
  );
}
