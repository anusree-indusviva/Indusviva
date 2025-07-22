import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router";

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
            <h2 className="text-3xl sm:text-6xl tv:tex font-bold text-gray-900 mb-4">
              Our Essence <br /> in a nutshell
            </h2>
            <h3 className="text-xl sm:text-6xl font-semibold text-gray-800 mb-6">
              We are IndusViva.
            </h3>
          </motion.div>

          {/* Video */}
          {/* <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={videoVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 shadow-md">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div> */}
        </div>

        {/* Description & CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center max-w-7xl mx-auto">
          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              We advocate Advanced Ayurveda — an evolved science rooted in
              tradition, powered by technology. We don’t just talk wellness,
              we formulate, manufacture, and market scientifically designed
              products that support holistic well-being, regardless of age.
              But we go beyond wellness.
            </p>
            <p>
              We create Wellness Entrepreneurs — individuals driven not just
              by income, but by impact. Through a sustainable and legally
              compliant direct selling model, IndusViva has been transforming
              lives and building a movement of purpose-led entrepreneurs across
              India and beyond.
            </p>
            <p>
              We’re not just building a company. We’re building a legacy —
              one entrepreneur at a time.
            </p>
          </div>

          {/* Button */}
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
