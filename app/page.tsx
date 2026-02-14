import Hero from "@/components/Hero";
import About from "@/components/About";
import CoffeeCollection from "@/components/CoffeeCollection";
import QualityProcess from "@/components/QualityProcess";
import Packaging from "@/components/Packaging";
import Sustainability from "@/components/Sustainability";
import WholesaleExport from "@/components/WholesaleExport";
import BrewingGuide from "@/components/BrewingGuide";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoffeeCollection />
      <QualityProcess />
      <Packaging />
      <Sustainability />
      <WholesaleExport />
      <BrewingGuide />
      <Contact />
    </>
  );
}
