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
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
      subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
      description:
        "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
      images: [image1, image2, image3],
    },
    {
      id: 2,
      number: "02",
      title: "ADVANCED EXTRACTION PRESERVES POTENCY",
      subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
      description:
        "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
      images: [image4, image5, image6],
    },
    {
      id: 3,
      number: "03",
      title: "Innovation Meets Tradition",
      subtitle: "Salacia roots travel to our state-of-the-art facility",
      description:
        "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
      images: [image7, image8, image9],
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 md:px-8 bg-teal-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            The IndusViva Edge
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            For Your Wellness and Wealth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {sustainabilityItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover="hover"
              className={`${
                index === 1 ? "lg:mt-12" : index === 2 ? "lg:mt-24" : ""
              }`}
            >
              <Card className="bg-white border-teal-200 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 sm:h-52 md:h-56 lg:h-52 bg-teal-200">
                    <Swiper
                      slidesPerView={1}
                      className="h-full w-full"
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      speed={1000}
                      grabCursor={true}
                    >
                      {item.images.map((image, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${item.title} ${i + 1}`}
                            className="w-full h-full object-cover"
                            style={{
                              borderRadius: "inherit",
                              display: "block",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-700 hover:bg-teal-50 bg-transparent"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TheIndusVivaEdge;
