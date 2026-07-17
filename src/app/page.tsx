import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import PracticeSection from "@/components/sections/PracticeSection";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SiteShell>
        <main>
          <HeroSection />
          <PhilosophySection />
          <PracticeSection />
          <BenefitsSection />
          <JourneySection />
          <CommunitySection />
          <ContactSection />
        </main>
        <Footer />
      </SiteShell>
    </>
  );
}
