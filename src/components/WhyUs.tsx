import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const reasons = [
  "22+ Years of Combined Hospitality Experience",
  "Restaurant Operations Specialists",
  "ISO-Based Process Approach",
  "Practical SOPs & Staff Training",
  "Monthly Compliance & Quality Reviews",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="More Than a Consultant. Your Long Term Restaurant Operations Partner." />

        <FadeIn delay={0.1}>
          <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-card px-5 py-4 shadow-card sm:last:col-span-2 sm:last:mx-auto sm:last:max-w-md"
              >
                <Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700 sm:text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-xl font-bold text-primary md:text-2xl">
            We don&apos;t just help you pass inspections.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            We help you build a restaurant that performs better every single day.
          </p>
        </FadeIn>
      </div>

      <SectionCTA label="Book a free restaurant audit" />
    </section>
  );
}
