import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="section-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Problems />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <CTA />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
