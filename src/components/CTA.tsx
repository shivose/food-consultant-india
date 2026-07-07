import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Better Systems. Better Teams. Better Restaurants.
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
                <p>
                  Whether you&apos;re opening a new restaurant, improving an existing operation,
                  or looking for a long-term operations partner, we&apos;re here to help.
                </p>
                <p>
                  Let&apos;s build a restaurant that is safe, consistent, efficient, and ready for
                  every inspection.
                </p>
              </div>
              <div className="mt-10">
                <Button href="#contact" variant="primary" size="lg" className="!bg-accent">
                  Schedule Your Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
