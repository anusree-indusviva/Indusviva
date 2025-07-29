import { motion } from "framer-motion";
import Video from "@/assets/img/Video.mp4";
export default function ResearchSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-10 px-4 bg-stone-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-8"
          variants={itemVariants}
        >
          At IndusViva, we prioritize safety, efficacy, and <br/> quality, ensuring
          the delivery of top-notch <br/> products to society.
        </motion.h2>
        <div className="w-full h-[12.625rem] sm:h-[18.75rem] md:h-[20rem] lg:h-[32.25rem] rounded-xl overflow-hidden mt-20 max-w-[90%] mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-fill"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.section>
  );
}
