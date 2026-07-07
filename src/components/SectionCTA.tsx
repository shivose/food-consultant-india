import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Button from "./Button";

type SectionCTAProps = {
  label?: string;
};

export default function SectionCTA({ label = "Schedule Your Restaurant Assessment" }: SectionCTAProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <FadeIn className="mt-12 flex justify-center md:mt-16">
        <Button href="#contact" size="lg">
          {label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </FadeIn>
    </div>
  );
}
