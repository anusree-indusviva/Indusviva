import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgVideo from "../../assets/img/video/Nature.mp4";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative bg-gray-300/45 min-h-[90vh] overflow-hidden py-12 px-4 sm:px-6 lg:px-8 julee-regular"
    >
      <div className="max-w-[98%] mx-auto h-full flex flex-col-reverse xl:flex-row items-center justify-between gap-8 lg:gap-16 mt-10">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="w-full xl:w-[35%] flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="text-2xl lg:text-2xl font-bold text-gray-800 text-center">
            ABOUT OUR COMPANY
          </h2>

          <h3 className="text-lg sm:text-xl md:text-lg font-semibold text-gray-700 mt-4">
            Our Essence in a nutshell
          </h3>
          <h3 className="text-lg sm:text-xl md:text-lg font-semibold text-gray-700 mb-3">
           We are IndusViva.
          </h3>

          <p className="text-sm sm:text-base xl:text-base text-gray-600 mb-5 leading-relaxed">
            We advocate Advanced Ayurveda – an evolved science rooted in
            tradition, powered by technology. We don’t just talk wellness, we
            formulate, manufacture, and market scientifically designed products
            that support holistic well-being, regardless of age. But we go beyond
            wellness.
          </p>

          <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
            We create Wellness Entrepreneurs — individuals driven not just by
            income, but by impact. Through a sustainable and legally compliant
            direct selling model, IndusViva has been transforming lives and
            building a movement of purpose-led entrepreneurs across India and
            beyond.
          </p>
          <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed my-2">
            We’re not just building a company. We’re building a legacy —one
          </p>
          <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
            entrepreneur at a time.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full xl:w-[65%] flex items-center justify-center"
        >
          <div className="w-full h-[15.625rem] sm:h-[18.75rem] md:h-[25rem] lg:h-[30.25rem]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-fill"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
