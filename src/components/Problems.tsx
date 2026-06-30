import Image from "next/image";
import { X } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const problems = [
  "Staff don't follow hygiene standards consistently",
  "SOPs exist but are rarely followed",
  "Food safety records are incomplete or missing",
  "Kitchen practices change from one shift to another",
  "Managers spend more time fixing problems than preventing them",
  "You're unsure whether your restaurant is fully prepared for an FSSAI inspection",
];

export default function Problems() {
  return (
    <section id="challenges" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Are These Challenges Holding Your Restaurant Back?"
          title="Most Restaurants Don't Have a People Problem. They Have a Systems Problem."
          subtitle="If your restaurant is facing any of these challenges, you're not alone."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                alt="Busy restaurant kitchen with staff managing daily food service operations"
                width={900}
                height={700}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full lg:min-h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm shadow-soft">
                <p className="text-sm font-semibold text-primary">Daily Operations Under Pressure</p>
                <p className="mt-1 text-xs text-slate-600">
                  Without strong systems, consistency breaks down shift after shift
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-2xl bg-accent/10 lg:block" />
          </FadeIn>

          <div className="order-1 space-y-4 lg:order-2">
            {problems.map((problem, index) => (
              <FadeIn key={problem} delay={index * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-card px-5 py-4 shadow-card">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{problem}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Without proper systems, maintaining food safety and operational consistency becomes
            difficult.
          </p>
        </FadeIn>
      </div>

      <SectionCTA />
    </section>
  );
}
