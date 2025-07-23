import { motion } from "framer-motion";
import image1 from "@/assets/img/1.png";
import image2 from "@/assets/img/2.png";
import image3 from "@/assets/img/3.png";
import image4 from "@/assets/img/4.png";
import image5 from "@/assets/img/5.png";
import image6 from "@/assets/img/6.png";
import image7 from "@/assets/img/7.png";
import image8 from "@/assets/img/8.png";
import image9 from "@/assets/img/9.png";
import { Button } from "../ui/button";
// @ts-expect-error
import "swiper/css";

const TheIndusVivaEdge = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };
const sustainabilityItems = [
  {
    id: 1,
    number: "01",
    title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    cardTittle:"Science Meets Nature",
    subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    description:
      "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
    images: [image1, image2, image3],
  },
  {
    id: 2,
    number: "02",
    title: "ADVANCED EXTRACTION PRESERVES POTENCY",
    cardTittle:"Global-Grade Safety & Efficacy",
    subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
    description:
      "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
    images: [image4, image5, image6],
  },
  {
    id: 3,
    number: "03",
    title: "Innovation Meets Tradition",
    cardTittle:"Ethical & Legal First",
    subtitle: "Salacia roots travel to our state-of-the-art facility",
    description:
      "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
    images: [image7, image8, image9],
  },
];

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 md:px-8 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-3 sm:mb-4">
            The IndusViva Edge
          </h2>
          <p className="text-amber-50 text-base sm:text-lg">
            For Your Wellness and Wealth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:mt-40"
          variants={containerVariants}
        >
          {sustainabilityItems?.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover="hover"
              className={` ${
                index === 1 ? "lg:-mt-20" : index === 2 ? "lg:-mt-40" : ""
              }`}
            >
              <div className=" shadow-lg overflow-hidden rounded-4xl xl:max-w-[16vw]  bg-white w-full ">
                <div className="w-full h-full flex-col">
                  <img
                    src={item.images[1] || "/placeholder.svg"}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 sm:p-6 rounded-t-2xl overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {item.cardTittle}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mt-10 w-full flex justify-center"
                    >
                        <Button
                          size="sm"
                          className="bg-green-800 hover:bg-teal-700 text-white px-12 py-4 3xl:px-12 3xl:py-5 tv:px-15 tv:py-8 flex items-center justify-center gap-4 3xl:text-xs tv:text-sm"
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
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TheIndusVivaEdge;
