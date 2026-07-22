import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import SiteShell from "@/components/SiteShell";

const MediaChapterSection = dynamic(
  () => import("@/components/sections/MediaChapterSection"),
);
const BeliefsSection = dynamic(
  () => import("@/components/sections/BeliefsSection"),
);
const FrameworkSection = dynamic(
  () => import("@/components/sections/FrameworkSection"),
);
const NotesSection = dynamic(
  () => import("@/components/sections/NotesSection"),
);
const CommunitySection = dynamic(
  () => import("@/components/sections/CommunitySection"),
);
const ExperiencesSection = dynamic(
  () => import("@/components/sections/ExperiencesSection"),
);
const StoriesSection = dynamic(
  () => import("@/components/sections/StoriesSection"),
);
const BeginSection = dynamic(
  () => import("@/components/sections/BeginSection"),
);
const NewsletterSection = dynamic(
  () => import("@/components/sections/NewsletterSection"),
);

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
