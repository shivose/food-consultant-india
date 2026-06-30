import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const comparisons = [
  {
    challenge: "Concerned about FSSAI inspections",
    solution: "Build inspection-ready systems that work every day",
  },
  {
    challenge: "SOPs are not followed consistently",
    solution: "Practical SOPs designed for your restaurant",
  },
  {
    challenge: "Staff make repeated hygiene mistakes",
    solution: "Hands-on food safety and hygiene training",
  },
  {
    challenge: "Kitchen operations are inconsistent",
    solution: "Standardized daily operational processes",
  },
  {
    challenge: "Audit reports are never implemented",
    solution: "We help implement and monitor improvements",
  },
  {
    challenge: "Compliance drops after a few months",
    solution: "Ongoing reviews and continuous support",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Restaurant Owners Choose Us"
          title="We Don't Just Find Problems. We Help You Build Better Systems."
        />

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <div className="hidden sm:grid sm:grid-cols-2">
              <div className="bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                Common Restaurant Challenges
              </div>
              <div className="bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-white">
                Our Solution
              </div>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={row.challenge}
                className={`grid sm:grid-cols-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                } ${index !== comparisons.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="border-b border-slate-100 px-6 py-4 sm:border-b-0 sm:border-r">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:hidden">
                    Challenge
                  </p>
                  <p className="text-sm font-medium text-slate-700 sm:text-base">{row.challenge}</p>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent sm:hidden">
                    Our Solution
                  </p>
                  <p className="text-sm text-slate-600 sm:text-base">{row.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-primary md:text-3xl">
              More Than an Audit. A Long-Term Restaurant Operations Partner.
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Most consultants inspect your restaurant, submit a report, and leave.
              </p>
              <p>
                We work alongside your team to implement practical improvements that become part
                of your daily operations.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <SectionCTA />
    </section>
  );
}
