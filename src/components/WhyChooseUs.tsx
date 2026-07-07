import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

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
        <SectionHeader title="Our Consulting Covers" />

        <FadeIn delay={0.1}>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
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
        </FadeIn>
      </div>

      <SectionCTA />
    </section>
  );
}
