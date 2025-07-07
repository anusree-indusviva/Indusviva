import CompanyValues from "@/components/about/company-values";
import FaqSection from "@/components/about/faq-section";
import TeamSection from "@/components/about/team-section";
import WhoWeAre from "@/components/about/who-we-are";
import FooterBrandSlider from "@/components/FooterBrandSlider";
import FooterTextSlider from "@/components/FooterTextSlider";
import TestimonialsSection from "@/components/home/testimonials-section";

const About = () => {
  return (
    <div>
      {/* Hero banner image at the top of the About page */}
      <div className="min-h-[50vh] h-[50vh] ">
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

      {/* Section introducing the Brands */}
      <div className=" max-w-[90%] mx-auto pb-20">
        <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-4 text-center">
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
          <h2 className="text-base sm:text-lg font-medium">
            Global Trusted Partner
          </h2>
          <div className="w-full sm:w-[40%] bg-gray-500/40 h-0.5" />
        </div>
        <FooterBrandSlider />
      </div>

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
