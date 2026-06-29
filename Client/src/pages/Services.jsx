import SEO from "../components/common/SEO";

import ServiceHero from "../components/services/ServiceHero";
import ServiceCards from "../components/services/ServiceCards";
import LearningProcess from "../components/services/LearningProcess";
import WhyChooseNextnix from "../components/services/WhyChooseNextnix";
import FAQSection from "../components/services/FAQSection";
import ServiceCTA from "../components/services/ServiceCTA";

export default function Service() {
    return (
        <>
            <SEO
                title="Services | Nextnix"
                description="Explore Nextnix services including Live Classes, College Workshops, Corporate Training, Career Guidance, and practical tech learning."
                keywords="Nextnix Services, Live Classes, College Workshops, Corporate Training, Career Guidance, Coding Classes"
                url="https://nextnix.netlify.app/services"
                image="https://nextnix.netlify.app/logo.png"
            />

            <div className="relative isolate overflow-hidden">

                {/* Background Grid */}
                <div className="nn-bg-light-grid absolute inset-0 -z-10" />

                {/* Hero */}
                <ServiceHero />

                {/* Services */}
                <ServiceCards />

                {/* Learning Journey */}
                <LearningProcess />

                {/* Why Nextnix */}
                <WhyChooseNextnix />

                {/* FAQ */}
                <FAQSection />

                {/* Final CTA */}
                <ServiceCTA />

            </div>
        </>
    );
}