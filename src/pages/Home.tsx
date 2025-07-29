import HeroSection from "@/components/home/hero-section";
import ProductsSection from "@/components/home/products-section";
import ResearchSection from "@/components/home/research-section";
import OurEssence from "@/components/home/our-essence";
import TheIndusVivaEdge from "@/components/home/theIndusVivaEdge";
import StataticsSection from "@/components/home/statatics-section";
import NeedAssistance from "@/components/home/needAssistance";

const Home = () => {
  return (
    <section className=" overflow-hidden">
      <HeroSection />
      <OurEssence/>
      <TheIndusVivaEdge/>
      <ProductsSection />
      <ResearchSection />
      <StataticsSection/>   
      <NeedAssistance/>
    </section>
  );
};

export default Home;
