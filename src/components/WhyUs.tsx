import Image from "next/image";
import FadeIn from "./FadeIn";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            We Don&apos;t Just Find Problems. We Help You Fix Them.
          </h2>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="right" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                alt="Professional commercial kitchen with chefs in hairnets and gloves during hygiene inspection"
                width={900}
                height={700}
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm shadow-soft">
                <p className="text-sm font-semibold text-primary">Inspection-Ready Operations</p>
                <p className="mt-1 text-xs text-slate-600">
                  Professional food safety systems for modern restaurants
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-accent/10" />
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
            <div className="space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                Many companies perform an audit, hand over a report, and leave.
              </p>
              <p className="font-medium text-primary">Our approach is different.</p>
              <p>
                We work with restaurant owners to improve daily operations by helping teams
                understand what needs to change and how to maintain those improvements.
              </p>
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="font-semibold text-primary">Our goal is simple:</p>
                <p className="mt-2 text-slate-700">
                  To build systems that continue working long after the audit is completed.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
