import WeAreHelp from "@/components/costumercare/we-are-help";
import NavigationHeroSection from "@/components/NavigationHeroSection";

export default function CustomerSupport() {
  return (
    <section className="dancing-script-500">
      <NavigationHeroSection title="Customer Care" path="Customer Care" />
      <WeAreHelp />
    </section>
  );
}
