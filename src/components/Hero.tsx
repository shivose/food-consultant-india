import {
  Check,
  ClipboardList,
  RefreshCw,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import FadeIn from "./FadeIn";
import SectionCTA from "./SectionCTA";

const benefits = [
  {
    icon: ShieldCheck,
    label: "Food Safety Compliance",
  },
  {
    icon: ClipboardList,
    label: "SOP Development & Implementation",
  },
  {
    icon: Users,
    label: "Staff Training",
  },
  {
    icon: Star,
    label: "Guest Experience Audits",
  },
  {
    icon: RefreshCw,
    label: "Ongoing Compliance Support",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-green-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:max-w-5xl">
          <FadeIn delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
              <ShieldCheck className="h-4 w-4" />
              FSSAI Compliance Experts
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]">
              Stay FSSAI Compliant with Expert Restaurant Operations Consulting
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg font-semibold leading-snug text-primary sm:text-xl">
              Don&apos;t Wait for an FSSAI Inspection to Discover What&apos;s Wrong. Build a
              Restaurant That Stays Inspection-Ready Every Day.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Running a restaurant is challenging. Between managing staff, kitchen operations,
                customer expectations, and daily service, maintaining food safety standards can
                easily become inconsistent.
              </p>
              <p>
                We help restaurants identify compliance gaps, implement practical SOPs, train
                teams, and build operational systems that keep your restaurant safe, compliant,
                and running efficiently every day.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 rounded-2xl border border-accent/20 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
                What We Help You With
              </p>
              <ul className="mx-auto flex max-w-4xl flex-col items-center gap-3 md:hidden">
                {benefits.map((benefit) => (
                  <li
                    key={benefit.label}
                    className="flex w-full max-w-md items-center gap-3 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3.5 text-left transition-colors hover:border-accent/30 hover:bg-accent/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-sm">
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold leading-snug text-primary">
                      {benefit.label}
                    </span>
                    <Check className="ml-auto h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <ul className="mx-auto hidden max-w-4xl grid-cols-6 gap-3 md:grid">
                {benefits.slice(0, 3).map((benefit) => (
                  <li
                    key={benefit.label}
                    className="col-span-2 flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3.5 text-left transition-colors hover:border-accent/30 hover:bg-accent/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-sm">
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold leading-snug text-primary lg:text-base">
                      {benefit.label}
                    </span>
                    <Check className="ml-auto h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  </li>
                ))}
                {benefits.slice(3).map((benefit, index) => (
                  <li
                    key={benefit.label}
                    className={`col-span-2 flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3.5 text-left transition-colors hover:border-accent/30 hover:bg-accent/10 ${
                      index === 0 ? "col-start-2" : "col-start-4"
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-sm">
                      <benefit.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold leading-snug text-primary lg:text-base">
                      {benefit.label}
                    </span>
                    <Check className="ml-auto h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      <SectionCTA />
    </section>
  );
}
