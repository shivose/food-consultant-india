import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import Footer from "./Footer";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 glass-nav shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft transition-transform group-hover:scale-105">
              <UtensilsCrossed className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-primary">
              FoodConsult<span className="text-accent">Pro</span>
            </span>
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-slate-200 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>
          </div>

          <article className="legal-content">{children}</article>

          <div className="mt-12 rounded-2xl border border-slate-100 bg-card p-6 shadow-soft">
            <p className="text-sm text-slate-600">
              Have questions about this page?{" "}
              <Link href="/#contact" className="font-medium text-accent hover:underline">
                Contact us
              </Link>{" "}
              or return to the{" "}
              <Link href="/" className="font-medium text-accent hover:underline">
                homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
