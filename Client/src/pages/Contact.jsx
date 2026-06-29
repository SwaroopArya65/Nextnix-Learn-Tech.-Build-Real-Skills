import SEO from "../components/common/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocation from "../components/contact/OfficeLocation";
import SocialConnect from "../components/contact/SocialConnect";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Nextnix | Get in Touch"
        description="Contact Nextnix for student guidance, college workshops, corporate training, partnerships, or general inquiries. We'd love to hear from you."
        keywords="Contact Nextnix, Student Support, College Workshops, Corporate Training, Tech Education, Programming Training, Nextnix Contact"
        url="https://nextnix.netlify.app/contact"
        image="https://nextnix.netlify.app/logo.png"
      />

      <div className="relative isolate overflow-hidden">

        {/* Background */}

        <div className="nn-bg-light-grid absolute inset-0 -z-10" />

        {/* Hero */}

        <ContactHero />

        {/* Contact Options */}

        <section id="contact-options">
          <ContactOptions />
        </section>

        {/* Contact Form */}

        <section id="contact-form">
          <ContactForm />
        </section>

        {/* Office Location */}

        <section id="office-location">
          <OfficeLocation />
        </section>

        {/* Social Media */}

        <section id="social-connect">
          <SocialConnect />
        </section>

        {/* FAQ */}

        <section id="faq">
          <ContactFAQ />
        </section>

        {/* CTA */}

        <ContactCTA />

      </div>
    </>
  );
}