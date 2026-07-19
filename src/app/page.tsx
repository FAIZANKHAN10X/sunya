import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BeginSection from "@/components/sections/BeginSection";
import BeliefsSection from "@/components/sections/BeliefsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import MediaChapterSection from "@/components/sections/MediaChapterSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import NotesSection from "@/components/sections/NotesSection";
import StoriesSection from "@/components/sections/StoriesSection";
import SiteShell from "@/components/SiteShell";

/**
 * Homepage — guided philosophy journey.
 */
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SiteShell>
        <main>
          <HeroSection />
          <IntroductionSection />
          <MediaChapterSection />
          <BeliefsSection />
          <FrameworkSection />
          <NotesSection />
          <CommunitySection />
          <ExperiencesSection />
          <StoriesSection />
          <BeginSection />
          <NewsletterSection />
        </main>
        <Footer />
      </SiteShell>
    </>
  );
}
