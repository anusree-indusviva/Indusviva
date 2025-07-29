import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";

import ProductCard from "./product-card";
import { Link } from "react-router";
import { products } from "@/lib/ingrediantsData";
import SwiperCore from "swiper";

export default function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  //@ts-ignore
  const swiperRef = useRef<SwiperCore>();

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleMouseEnterLeft = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
      //@ts-ignore
      swiperRef.current.params.autoplay.reverseDirection = true;
      swiperRef.current.autoplay.start();
    }
  };

  const handleMouseLeaveLeft = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
      //@ts-ignore
      swiperRef.current.params.autoplay.reverseDirection = false;
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section
      ref={ref}
      id="our-products"
      className="py-16 md:py-24 bg-stone-100 overflow-hidden euphoria-script-regular"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%] mx-auto ">
          <div className="">
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={titleVariants}
              className="text-3xl  lg:text-5xl 2xl:text-6xl font-bold text-gray-900 "
            >
              Our Essence in <br /> a Nutshell
            </motion.h2>
          </div>

          <div className=" flex justify-end ">
            <div className=" xl:max-w-xl">
              <div className="">
                <motion.h2
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={titleVariants}
                  className="text-xl lg:text-4xl font-semibold text-gray-900"
                >
                  From Nature To You
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-lg text-gray-700 max-w-3xl text-start w-full"
              >
                Our products, cater to diverse unmet needs in consumer health.
                Rooted in strong Ayurvedic evidence, these science-driven
                projects undergo constant validation through modern scientific
                tools.
              </motion.p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-12 group"
          onMouseLeave={handleMouseLeaveLeft}
        >
          {/* Left hover zone */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/4 z-10"
            onMouseEnter={handleMouseEnterLeft}
          />

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={800}
            loop={true}
            slidesPerGroup={1}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="!pb-14"
          >
            {products.map((product, ind) => (
              <SwiperSlide key={product?.id}>
                <Link to={`/ingredients/${product?.id}`} state={product}>
                  <ProductCard
                    img={product?.images[0]}
                    name={product?.title}
                    ind={ind}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
