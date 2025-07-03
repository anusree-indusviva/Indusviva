import CompanyValues from "@/components/about/company-values";
import FaqSection from "@/components/about/faq-section";
import TeamSection from "@/components/about/team-section";
import WhoWeAre from "@/components/about/who-we-are";
import FooterTextSlider from "@/components/FooterTextSlider";
import TestimonialsSection from "@/components/home/testimonials-section";

const About = () => {
  return (
    <div>
      {/* Hero banner image at the top of the About page */}
      <div className="min-h-[50vh] h-[50vh]">
        <img
          src="./About.jpg"
          alt="About page banner"
          className="h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>

      {/* Section describing who the company is and what they do */}
      <WhoWeAre />

      {/* Section showcasing the company's core values */}
      <CompanyValues />

      {/* Section introducing the team members */}
      <TeamSection />

      {/* Frequently Asked Questions section */}
      <FaqSection />

      {/* Customer testimonials for building trust and credibility */}
      <TestimonialsSection />

      {/* Animated footer text slider for additional engagement or branding */}
      <FooterTextSlider />
    </div>
  );
};

export default About;
