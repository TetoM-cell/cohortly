import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import Comparison from "@/components/landing/Comparison";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}
