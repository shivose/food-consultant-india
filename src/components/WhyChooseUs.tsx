import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const comparisons = [
  {
    current: "Staff work differently every shift",
    after: "Standard SOPs followed across all shifts",
  },
  {
    current: "Hygiene depends on individual staff",
    after: "Consistent food safety practices",
  },
  {
    current: "Managers keep solving the same problems",
    after: "System-driven daily operations",
  },
  {
    current: "Last-minute inspection preparation",
    after: "Inspection-ready every day",
  },
  {
    current: "Repeated guest complaints",
    after: "Better guest experience and consistency",
  },
  {
    current: "Operational confusion",
    after: "Clear accountability and defined processes",
  },
];

const consultingCovers = [
  "Restaurant Operations Assessment",
  "Food Safety & Compliance",
  "SOP Development",
  "Staff Training",
  "Guest Experience Audits",
  "Monthly Compliance & Quality Reviews",
];

export default function WhyChooseUs() {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Build a Restaurant That Runs on Systems—Not Constant Supervision" />

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <div className="hidden sm:grid sm:grid-cols-2">
              <div className="bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                Current Situation
              </div>
              <div className="bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                After Working With FoodConsultPro
              </div>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={row.current}
                className={`grid sm:grid-cols-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                } ${index !== comparisons.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="border-b border-slate-100 px-6 py-4 sm:border-b-0 sm:border-r">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:hidden">
                    Current Situation
                  </p>
                  <p className="text-sm font-medium text-slate-700 sm:text-base">{row.current}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent sm:hidden">
                    After Working With FoodConsultPro
                  </p>
                  <p className="text-sm text-slate-600 sm:text-base">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-center text-2xl font-bold text-primary md:text-3xl">
              Our Consulting Covers
            </h3>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {consultingCovers.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3.5"
                >
                  <Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <SectionCTA />
    </section>
  );
}
