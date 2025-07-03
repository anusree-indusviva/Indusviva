import BlogSection from "@/components/home/blog-section";
import NavigationHeroSection from "@/components/NavigationHeroSection";

const Blogs = () => {
  return (
    <section>
      {/* Reusable hero section with breadcrumb navigation and page title */}
      <NavigationHeroSection title="Our Blogs" path="Blogs" />
      
      {/* Blog listing section displaying all available blog posts */}
      <BlogSection />
    </section>
  );
};

export default Blogs;
