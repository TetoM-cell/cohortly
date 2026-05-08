import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HeroAsset } from "@/components/HeroAsset";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HeroAsset />
      <Features />
      <Testimonials />
      <FAQ standalone />
      <Footer />
    </main>
  );
}
