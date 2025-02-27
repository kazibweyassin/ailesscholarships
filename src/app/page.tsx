import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks"; // Corrected filename
import {LogoTicker} from "@/sections/LogoTicker";
import Footer from "@/sections/Footer";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import CallToAction from "../sections/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </>
  );
}
