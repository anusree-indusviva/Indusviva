import CompanyValues from "@/components/about/company-values";
import FaqSection from "@/components/about/faq-section";
import WhoWeAre from "@/components/about/who-we-are";
import FooterBrandSlider from "@/components/FooterBrandSlider";
import FooterTextSlider from "@/components/FooterTextSlider";
import TestimonialsSection from "@/components/home/testimonials-section";

const About = () => {
  return (
    <div className="dancing-script-600">
      <div className="min-h-[50vh] h-[50vh] ">
        <img
          src="./About.jpg"
          alt="About page banner"
          className="h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>

      <WhoWeAre />

      <CompanyValues />

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

      <FaqSection />

      <TestimonialsSection />

      <FooterTextSlider />
    </div>
  );
};

export default About;
