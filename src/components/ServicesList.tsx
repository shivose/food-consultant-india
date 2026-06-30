import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const serviceItems = [
  "Food Safety Audits",
  "FSSAI Compliance Consulting",
  "SOP Development & Implementation",
  "Staff Hygiene & Food Safety Training",
  "Kitchen Operations Audits",
  "Guest Experience Audits",
  "Restaurant Process Improvement",
  "Monthly Compliance Programs",
];

export default function ServicesList() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What We Offer"
          subtitle="Everything your restaurant needs to maintain compliance and operational excellence."
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceItems.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-card px-5 py-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
