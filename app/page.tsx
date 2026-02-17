import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Ingredients from "@/components/Ingredients";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Practitioner from "@/components/Practitioner";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Ingredients />
      <HowItWorks />
      <Benefits />
      <Practitioner />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
