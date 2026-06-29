import SEO from "../components/common/SEO";

import LearnHero from "../components/learn/LearnHero";
import LearningCategories from "../components/learn/LearningCategories";
import FeaturedPaths from "../components/learn/FeaturedPaths";
import LatestTutorials from "../components/learn/LatestTutorials";
import LearningRoadmap from "../components/learn/LearningRoadmap";
import WhyLearnNextnix from "../components/learn/WhyLearnNextnix";
import LearningResources from "../components/learn/LearningResources";
import LearnFAQ from "../components/learn/LearnFAQ";
import LearnCTA from "../components/learn/LearnCTA";

export default function Learn() {
  return (
    <>
      <SEO
        title="Learn | Nextnix"
        description="Start your tech journey with structured learning paths, practical projects, coding tutorials, networking, Windows Administration, and career guidance from Nextnix."
        keywords="Learn Coding, Web Development, MERN Stack, CCNA, Windows Administration, Career Guidance, Nextnix, Programming Tutorials"
        url="https://nextnix.netlify.app/learn"
        image="https://nextnix.netlify.app/logo.png"
      />

      <div className="relative isolate overflow-hidden">

        {/* Background */}

        <div className="nn-bg-light-grid absolute inset-0 -z-10" />

        {/* Hero */}

        <LearnHero />

        {/* Learning Categories */}

        <section id="categories">
          <LearningCategories />
        </section>

        {/* Featured Learning Paths */}

        <section id="learning-paths">
          <FeaturedPaths />
        </section>

        {/* Latest Tutorials */}

        <section id="tutorials">
          <LatestTutorials />
        </section>

        {/* Learning Roadmap */}

        <section id="roadmap">
          <LearningRoadmap />
        </section>

        {/* Why Learn with Nextnix */}

        <section id="why-nextnix">
          <WhyLearnNextnix />
        </section>

        {/* Learning Resources */}

        <section id="resources">
          <LearningResources />
        </section>

        {/* FAQ */}

        <section id="faq">
          <LearnFAQ />
        </section>

        {/* CTA */}

        <LearnCTA />

      </div>
    </>
  );
}