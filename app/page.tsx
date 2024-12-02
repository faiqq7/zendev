import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Values from "@/components/sections/Values";
import EngagementModels from "@/components/sections/EngagementModels";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <EngagementModels />
      <Technologies />
      <Values />
      <Footer />
    </main>
  );
}