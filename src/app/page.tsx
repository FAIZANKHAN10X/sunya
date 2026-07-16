import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import Section from "@/components/Section";
import { sections } from "@/data/sections";

export default function Home() {
  return (
    <LoadingScreen>
      <Header />
      <main>
        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </LoadingScreen>
  );
}
