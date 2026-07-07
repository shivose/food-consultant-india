import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const comparisons = [
  {
    before: "Staff work differently every shift",
    after: "One standard followed by every team member",
  },
  {
    before: "Hygiene depends on the manager",
    after: "Daily food safety practices become routine",
  },
  {
    before: "SOPs are ignored",
    after: "Simple SOPs your team actually follows",
  },
  {
    before: "Problems keep returning",
    after: "Systems prevent problems before they happen",
  },
  {
    before: "Inspection stress",
    after: "Inspection-ready every day",
  },
  {
    before: "Managers keep firefighting",
    after: "Structured operations with clear accountability",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="We Build Systems That Make Restaurants Better" />

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg">
            <div className="hidden grid-cols-2 bg-primary text-sm font-semibold text-white md:grid">
              <div className="border-r border-white/10 px-6 py-4">Current Situation</div>
              <div className="px-6 py-4">After FoodConsultPro</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisons.map((row, index) => (
                <div
                  key={row.before}
                  className="grid gap-0 md:grid-cols-2 md:gap-0"
                >
                  <div className="border-b border-slate-100 bg-slate-50/80 px-5 py-4 md:border-b-0 md:border-r md:border-slate-100 md:px-6 md:py-5">
                    {index === 0 && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 md:hidden">
                        Current Situation
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{row.before}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-4 md:px-6 md:py-5">
                    {index === 0 && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent md:hidden">
                        After FoodConsultPro
                      </p>
                    )}
                    <ArrowRight
                      className="mt-0.5 hidden h-4 w-4 shrink-0 text-accent md:block"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium leading-relaxed text-primary sm:text-base">
                      {row.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
