import BranchOffices from "@/components/contactUs/branch-office";
import ContactForm from "@/components/contactUs/contact-form";
import NavigationHeroSection from "@/components/NavigationHeroSection";
import WeAreHelp from "@/components/costumercare/we-are-help";

const ContactUs = () => {
  return (
    <>
      <section className="euphoria-script-regular ">
        <NavigationHeroSection title="contact us" path="contact us" />
        <ContactForm />
        <WeAreHelp />
        <BranchOffices />
      </section>
      <section className="dancing-script-500">
        {/* <NavigationHeroSection title="Customer Care" path="Customer Care" /> */}
        {/* <WeAreHelp /> */}
      </section>
    </>
  );
};

export default ContactUs;
