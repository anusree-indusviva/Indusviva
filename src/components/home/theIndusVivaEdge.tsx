import { AnimatePresence, motion } from "framer-motion";
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
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { X } from "lucide-react";

const TheIndusVivaEdge = () => {
  const [open, setOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
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
      cardTittle: "Science Meets Nature",
      subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
      description:
        " cutting-edge fusion of Advanced Ayurveda and modern science, leveraging phytoceuticals and clinically backed formulations to deliver balanced, targeted wellness solutions that work at the cellular level. ",
      images: [image1, image2, image3],
    },
    {
      id: 2,
      number: "02",
      cardTittle: "Global-Grade Safety & Efficacy",
      subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
      description:
        "Every product is clinically tested and aligned with international quality benchmarks, ensuring safety, efficacy, and trust for health-conscious consumers worldwide. ",
      images: [image4, image5, image6],
    },
    {
      id: 3,
      number: "03",
      cardTittle: "Certiefied & Compliant",
      subtitle: "Salacia roots travel to our state-of-the-art facility",
      description:
        "Our processes and products meet stringent GMP, FSSAI, and global compliance standards, reflecting our commitment to regulated, transparent, and trusted wellness solutions. ",
      images: [image7, image8, image9],
    },
  ];

  const handleDialog = (item: any) => {
    setOpen(true);
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [open]);

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 md:px-8 bg-black min-h-screen "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className=" max-w-[80%] mx-auto">
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-amber-50 mb-3 sm:mb-4">
            The IndusViva Edge
          </h2>
          <p className="text-amber-50 text-base sm:text-xl">
            Your holistic wellbeing is our Priority
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:mt-40 "
          variants={containerVariants}
        >
          {sustainabilityItems?.map((item, index) => (
            <motion.div
              key={item?.cardTittle}
              variants={cardVariants}
              whileHover="hover"
              className={`  ${
                index === 1 ? "lg:-mt-25" : index === 2 ? "lg:-mt-50" : ""
              }`}
            >
             
              <div className="w-full 2xl:max-w-[20vw] 3xl:max-w-[40vw] 3xl:w-[20vw] overflow-hidden rounded-4xl">
                <div className="relative h-[40vh] overflow-hidden">
                  <img
                    src={item?.images[1] || "/placeholder.svg"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[8vh] bg-white rounded-t-[2rem]"></div>
                </div>
                <div className="bg-white p-3 space-y-4 -mt-4 relative z-10 2xl:py-10 py-5">
                  <h2 className="2xl:text-3xl text-2xl font-bold text-gray-900 text-center ">
                    {item?.cardTittle}
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 w-full flex justify-center"
                  >
                    <Button
                      size="sm"
                      className="bg-green-800 hover:bg-teal-700 text-white px-12 py-2 3xl:px-12 3xl:py-6 tv:px-15 tv:py-8 flex items-center justify-center gap-4 3xl:text-base tv:text-sm"
                      onClick={() => handleDialog(item)}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        <AnimatePresence>
          {open && selectedItem && (
            <motion.div
              className="fixed inset-0 z-[999] bg-black/50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex min-h-screen justify-center items-start sm:items-center p-2 sm:p-4">
                <motion.div
                  className="w-full  sm:max-w-7xl"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    ref={dialogRef}
                    className="rounded-lg relative max-h-[calc(100vh-2rem)] overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div
                      key={selectedItem?.id}
                      className={`px-2 md:px-4 pb-8 sticky top-[15vh] `}
                    >
                      <div
                        className="bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row items-center 
              h-auto min-h-[80vh] md:min-h-[50vh] md:h-[65vh] lg:max-w-[90%] mx-auto 
              lg:p-8 p-4 w-full shadow-md md:max-w-[60%] relative p"
                      >
                        <span
                          className="absolute top-3 right-4 p-1 border border-gray-500 rounded-full cursor-pointer
                        "
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <X className="w-4 h-4" />
                        </span>

                        <div
                          className=" md:p-8 lg:p-10 w-full lg:w-1/2 space-y-2 lg:space-y-4 
                flex flex-col justify-center item-content text-center lg:text-left"
                        >
                          <h2 className="text-sm md:text-lg lg:text-2xl 3xl:text-4xl font-bold text-gray-800 uppercase animate-in">
                            {selectedItem?.cardTittle}
                          </h2>
                          {selectedItem.id == 3 && (
                            <h3 className="text-xs md:text-base lg:text-lg 3xl:text-2xl font-medium text-gray-900 animate-in">
                              {selectedItem?.subtitle}
                            </h3>
                          )}
                          <p className="text-gray-900 text-sm md:text-sm lg:text-base 3xl:text-xl line-clamp-3 lg:line-clamp-none animate-in">
                            {selectedItem?.description}
                          </p>
                        </div>

                        <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full py-2">
                          <Swiper
                            slidesPerView={1}
                            className="h-full w-full rounded-xl overflow-hidden"
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            speed={1000}
                            grabCursor={true}
                          >
                            {selectedItem?.images.map(
                              (image: string, i: number) => (
                                <SwiperSlide key={i}>
                                  <img
                                    src={image || "/placeholder.svg"}
                                    alt={`${selectedItem?.title} ${i + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                    style={{
                                      borderRadius: "inherit",
                                      display: "block",
                                    }}
                                  />
                                </SwiperSlide>
                              )
                            )}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default TheIndusVivaEdge;
