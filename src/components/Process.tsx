"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const steps = [
  "Compliance Gaps",
  "Professional Restaurant Assessment",
  "Detailed Action Plan",
  "SOP Development & Implementation",
  "Staff Training & Coaching",
  "Monthly Compliance Reviews",
  "Inspection-Ready Restaurant",
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Restaurant Compliance Journey"
          title="Our Process is Simple. Our Results are Long Lasting."
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-slate-200" />
            <div className="grid grid-cols-7 gap-3">
              {steps.map((step, index) => (
                <FadeIn key={step} delay={index * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg shadow-accent/30">
                      {index + 1}
                    </div>
                    <p className="mt-4 text-xs font-medium leading-snug text-slate-700 xl:text-sm">
                      {step}
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
              <FadeIn key={step} delay={index * 0.06}>
                <div className="flex flex-col items-center pb-6 last:pb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md shadow-accent/30">
                    {index + 1}
                  </div>
                  <p className="mt-2 text-center text-sm font-medium text-slate-700">{step}</p>
                  {index < steps.length - 1 && (
                    <div className="my-2 h-6 w-0.5 bg-slate-200" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4} className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-primary md:text-3xl">
              Build a Restaurant That Operates with Confidence
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Whether you&apos;re preparing for an FSSAI inspection or simply want to improve
                your restaurant&apos;s operations, we&apos;re here to help.
              </p>
              <p>Our mission is not just to help you pass an inspection.</p>
              <p className="font-semibold text-primary">
                Our mission is to help you build a restaurant that operates safely, consistently,
                and confidently every single day.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <SectionCTA />
    </section>
  );
}
