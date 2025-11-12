import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Recipe Explorer",
  description: "Browse, search, and view delicious recipes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container-shell" suppressHydrationWarning>
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              {/** Sidebar slot is rendered per page via children composition if needed */}
              {/** For pages that include their own sidebar, they should render it. */}
            </div>
            <main className="md:col-span-3" role="main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
