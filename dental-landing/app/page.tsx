import { Header } from "@/components/Header";
import { BottomOverlays } from "@/components/BottomOverlays";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { ContactCta } from "@/components/sections/ContactCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BottomOverlays />
      <Hero />
      <Services />
      <Methodology />
      <Team />
      <Testimonials />
      <Faq />
      <ContactCta />
      <Footer />
    </>
  );
}
