"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const faqs = [
  {
    question: "What is a free restaurant audit?",
    answer:
      "It's a focused review of your restaurant's operations, food safety practices, and readiness for FSSAI inspections. We identify gaps in SOPs, hygiene, staff habits, and daily systems—then show you what to fix first.",
  },
  {
    question: "Who is this for?",
    answer:
      "Independent restaurants, cloud kitchens, QSRs, and multi-outlet brands that want consistent operations, better food safety, and inspection-ready systems—not just last-minute compliance fixes.",
  },
  {
    question: "Do you help with FSSAI compliance?",
    answer:
      "Yes. We help you build practical food safety routines, documentation, and staff habits so your restaurant stays inspection-ready every day—not only when an inspector is expected.",
  },
  {
    question: "How is this different from a one-time consultant visit?",
    answer:
      "We focus on systems your team can actually follow: clear SOPs, training, and ongoing reviews. The goal is long-term operational improvement, not a report that sits unused.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The initial audit is typically completed quickly after we understand your restaurant. Implementation timelines depend on your gaps and team size—we prioritize the highest-risk issues first.",
  },
  {
    question: "What happens after I book an audit?",
    answer:
      "We'll review your restaurant details, schedule a discussion or visit as needed, assess operational and food safety gaps, and share clear next steps to improve consistency and compliance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Clear answers about our restaurant audits and how we work."
        />

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/80 sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-semibold text-primary sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <SectionCTA label="Book a free restaurant audit" />
    </section>
  );
}
