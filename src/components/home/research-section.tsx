import { motion } from "framer-motion";

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
    // <section className="relative exo-2-400">
    //   <section ref={ref} className="w-full bg-[#0e7f7614] py-16 relative z-10">
    //     <div className="container mx-auto px-4 sm:px-6 md:px-10">
    //       <div className="flex items-center justify-center">
    //         <div className="space-y-6 text-center min-h-[40vh] max-w-5xl">
    //           <motion.p
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={inView ? { opacity: 1, y: 0 } : {}}
    //             transition={{ duration: 0.6 }}
    //             className="text-base sm:text-lg md:text-2xl text-gray-800 p-5"
    //           >
    //             Our Research and Development (R&D) division, including the specialized Transitional Phytochemistry team,
    //             uncovers the best ingredients from the treasures of ancient Ayurvedic texts.
    //           </motion.p>

    //           <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={inView ? { opacity: 1, y: 0 } : {}}
    //             transition={{ duration: 0.6, delay: 0.2 }}
    //           >
    //             <div className="flex justify-center">
    //               <Button
    //                 size="lg"
    //                 className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 3xl:px-16 3xl:py-6 tv:px-20 tv:py-12 flex items-center justify-center gap-2 3xl:text-xl tv:text-2xl"
    //               >
    //                 Read More
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="24"
    //                   height="24"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   className=" h-10 w-10 -rotate-45"
    //                 >
    //                   <path d="M5 12h14" />
    //                   <path d="m12 5 7 7-7 7" />
    //                 </svg>
    //               </Button>
    //             </div>
    //           </motion.div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <div
    //     className="parallax-container"
    //     style={{
    //       backgroundImage: `url(./solid-bg.png)`,
    //     }}
    //   />
    // </section>
    <motion.section
      className="py-20 px-4 bg-amber-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-8"
          variants={itemVariants}
        >
          At IndusViva, we prioritize safety, efficacy, and quality, ensuring
          the delivery of top-notch products to society.
        </motion.h2>
      </div>
    </motion.section>
  );
}
