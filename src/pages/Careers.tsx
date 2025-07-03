import JobList from "@/components/JobList";
import NavigationHeroSection from "@/components/NavigationHeroSection";

const Careers = () => {
  return (
    <section>
      {/* Hero section with breadcrumb navigation and page heading */}
      <NavigationHeroSection title="Careers" path="Careers" />
      
      {/* Dynamic job listings component showing current openings */}
      <JobList />
    </section>
  );
};

export default Careers;
