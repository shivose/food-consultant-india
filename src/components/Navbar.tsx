import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-nav shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-soft transition-transform group-hover:scale-105">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-primary">
            FoodConsult<span className="text-accent">Pro</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
