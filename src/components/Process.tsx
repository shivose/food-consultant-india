"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const steps = [
  {
    title: "Assess",
    description: "Understand your current operations and compliance status.",
  },
  {
    title: "Identify",
    description: "Find operational gaps, food safety risks, and blind spots.",
  },
  {
    title: "Implement",
    description: "Put practical SOPs and systems in place across your team.",
  },
  {
    title: "Train",
    description: "Build confident staff who follow standards every shift.",
  },
  {
    title: "Review",
    description: "Monthly compliance and quality reviews to maintain standards.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Restaurant Improvement Process"
          subtitle="Assess → Identify → Implement → Train → Review"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-slate-200" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg shadow-accent/30">
                      {index + 1}
                    </div>
                    <p className="mt-4 text-sm font-bold text-primary">{step.title}</p>
                    <p className="mt-2 text-xs leading-snug text-slate-600 xl:text-sm">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06}>
                <div className="flex flex-col items-center pb-6 last:pb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md shadow-accent/30">
                    {index + 1}
                  </div>
                  <p className="mt-2 text-center text-sm font-bold text-primary">{step.title}</p>
                  <p className="mt-1 text-center text-sm text-slate-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="my-2 text-slate-300">↓</div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <SectionCTA label="Schedule Your Restaurant Assessment" />
    </section>
  );
}
