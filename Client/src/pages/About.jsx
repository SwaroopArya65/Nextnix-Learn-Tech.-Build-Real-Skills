import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import MissionVision from "../components/about/MissionVision";
import WhyNextnix from "../components/about/WhyNextnix";
import CoreValues from "../components/about/CoreValues";
import LearningJourney from "../components/about/LearningJourney";
import ImpactSection from "../components/about/ImpactSection";
import FounderMessage from "../components/about/FounderMessage";
import AboutCTA from "../components/about/AboutCTA"
import SEO from "../components/common/SEO";

export default function About() {
  return (
    <>
      {/* SEO  */}

      <SEO
        title="About Nextnix | Our Mission to Simplify Tech Learning"
        description="Discover the story, mission, vision, and values behind Nextnix. Learn how we're helping beginners build real tech skills with practical learning."
        keywords="About Nextnix, Mission, Vision, Founder, Tech Education, Learning Platform"
        url="https://nextnix.netlify.app/about"
      />

      <div className="relative min-h-screen">

        {/* Background */}
        <div className="absolute inset-0 z-0 nn-bg-light-grid pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <AboutHero />
          <StorySection />
          <MissionVision />
          <WhyNextnix />
          <CoreValues />
          <LearningJourney />
          <ImpactSection />
          <FounderMessage />
          <AboutCTA />
        </div>

      </div>
    </>
  );
}