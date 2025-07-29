import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router";
import ImageGallery from "./imageGallery";

const OurEssence = () => {
 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

 
  return (
    <section className=" bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-[4.5rem] tv:text-9xl font-semibold text-gray-900 mb-4 xl:ml-10">
              The Viva  <br /> Portfolio
            </h2>
            <h3 className="text-xl sm:text-5xl font-semibold text-gray-900 mb-6 xl:ml-10">
              We are IndusViva.
            </h3>
          </motion.div>

          <ImageGallery/>
        </div>

        {/* Description & CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center max-w-7xl mx-auto">
          <div className="space-y-6 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p className=" text-center">
             IndusViva’s featured products are a result of advanced Ayurvedic research blended with modern nutraceutical innovation. Each formulation is designed to address specific health goals — from iCoffee, which supports healthy sugar balance, to iPulse, a powerful antioxidant-rich fruit blend that promotes immunity and cellular health. iGlow enhances skin vitality from within, iSlim aids in weight management, and iCare supports active aging and vision wellness. 
            </p>
            <p className="text-center">
               Backed by clinically studied ingredients and produced in our in-house certified facility, these products reflect our commitment to safe, <br/> effective, and targeted wellness solutions for today’s lifestyle needs. 
            </p>
         
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 w-full flex justify-center "
          >
            <Link to={"/About"}>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 3xl:px-12 3xl:py-5 tv:px-15 tv:py-8 flex items-center justify-center gap-4 3xl:text-xl tv:text-xl"
            >
              Discover More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" h-10 w-10 -rotate-45"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurEssence;
