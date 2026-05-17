import Hero from "@/components/viktor/Hero";
import Marquee from "@/components/viktor/Marquee";
import TestimonialSection from "@/components/viktor/TestimonialSection";
import PricingSection from "@/components/viktor/PricingSection";
import TestimonialCarousel from "@/components/viktor/TestimonialCarousel";
import ProjectsSection from "@/components/viktor/ProjectsSection";
import PartnerSection from "@/components/viktor/PartnerSection";
import Footer from "@/components/viktor/Footer";
import CopyrightBar from "@/components/viktor/CopyrightBar";
import BottomNav from "@/components/viktor/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#051A24] font-neue overflow-x-hidden pb-28">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
};

export default Index;
