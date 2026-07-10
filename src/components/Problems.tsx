import Image from "next/image";
import { AlertTriangle, X } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SectionCTA from "./SectionCTA";

const challenges = [
  "Staff don't follow hygiene standards consistently",
  "SOPs are created but rarely followed",
  "Kitchen practices vary between shifts",
  "Food safety records are incomplete",
  "Managers spend time fixing the same problems",
  "Restaurants prepare only when an inspection is expected",
];

const consequences = [
  "Customer Complaints",
  "Poor Online Reviews",
  "Food Safety Risks",
  "FSSAI Non-Compliance",
  "Damage to Reputation",
  "Revenue Loss",
];

export default function Problems() {
  return (
    <section id="challenges" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={
            <>
              Every restaurant has operational blind spots.
              <br />
              Do you know yours?
            </>
          }
          subtitle="Common Challenges We Find"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                alt="Busy restaurant kitchen with staff managing daily food service operations"
                width={900}
                height={700}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full lg:min-h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm shadow-soft">
                <p className="text-sm font-semibold text-primary">Hidden Gaps in Daily Operations</p>
                <p className="mt-1 text-xs text-slate-600">
                  Small inconsistencies today can become costly problems tomorrow
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-2xl bg-accent/10 lg:block" />
          </FadeIn>

          <div className="order-1 space-y-4 lg:order-2">
            {challenges.map((challenge, index) => (
              <FadeIn key={challenge} delay={index * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-card px-5 py-4 shadow-card">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{challenge}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 md:p-8">
            <h3 className="text-center text-lg font-bold text-primary md:text-xl">
              One Small Gap Can Lead To
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {consequences.map((consequence) => (
                <li
                  key={consequence}
                  className="flex items-center gap-2.5 rounded-xl border border-amber-200/60 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 sm:text-base"
                >
                  <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                  {consequence}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-xl font-bold text-primary md:text-2xl">
            The problem isn&apos;t your staff.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            It&apos;s the lack of systems they can consistently follow.
          </p>
        </FadeIn>
      </div>

      <SectionCTA label="Book a free restaurant audit" />
    </section>
  );
}
