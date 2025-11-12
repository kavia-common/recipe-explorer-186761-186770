"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { appShellGradient } from "@/lib/theme";

export default function Header() {
  const router = useRouter();
  const [term, setTerm] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = term.trim();
    router.push(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <header
      className={`sticky top-0 z-30 border-b border-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${appShellGradient}`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
        <Link href="/" className="group inline-flex items-center gap-2" aria-label="Recipe Explorer Home">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm group-hover:shadow transition-shadow">
            <span className="font-semibold">Rx</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 leading-tight">
              Recipe Explorer
            </h1>
            <p className="text-xs text-gray-500 -mt-0.5">Ocean Professional</p>
          </div>
        </Link>

        <form onSubmit={onSubmit} className="ml-auto flex-1 max-w-xl" role="search" aria-label="Search recipes">
          <label htmlFor="search" className="sr-only">
            Search recipes
          </label>
          <div className="relative">
            <input
              id="search"
              name="query"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search recipes, tags, ingredients..."
              className="w-full rounded-lg border border-gray-200 bg-white/90 px-4 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <svg
              className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.3-4.3M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </form>
      </div>
    </header>
  );
}
