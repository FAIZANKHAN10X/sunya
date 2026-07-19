import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BeginSection from "@/components/sections/BeginSection";
import BeliefsSection from "@/components/sections/BeliefsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import NotesSection from "@/components/sections/NotesSection";
import StoriesSection from "@/components/sections/StoriesSection";
import TurningPointSection from "@/components/sections/TurningPointSection";
import SiteShell from "@/components/SiteShell";

/**
 * Homepage composition — a guided philosophy journey.
 * Section order is the narrative arc; newsletter sits above the footer.
 */
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SiteShell>
        <main>
          {/* 01 Identity Declaration */}
          <HeroSection />
          {/* 02 Introduction */}
          <IntroductionSection />
          {/* 03 The Turning Point */}
          <TurningPointSection />
          {/* 04 What I Believe */}
          <BeliefsSection />
          {/* 05 The Framework */}
          <FrameworkSection />
          {/* 06 Notes From The Path */}
          <NotesSection />
          {/* 07 Community */}
          <CommunitySection />
          {/* 08 Practice & Experiences */}
          <ExperiencesSection />
          {/* 09 Stories of Change */}
          <StoriesSection />
          {/* 10 Begin */}
          <BeginSection />
          {/* Newsletter — above footer (not part of primary nav arc) */}
          <NewsletterSection />
        </main>
        <Footer />
      </SiteShell>
    </>
  );
}
