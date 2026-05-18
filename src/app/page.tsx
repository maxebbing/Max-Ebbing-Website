import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Why from "@/components/WhyMe";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="page-snap">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Why />
        <CTA />
      </main>
    </>
  );
}