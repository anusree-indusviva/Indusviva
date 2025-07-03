import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutbg from "@/assets/img/new/about-bg.png";
import philosophyimage from "@/assets/img/The-Philosophy-Behind-Our-Product.png";

export default function PhilosophySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background image positioned absolutely */}
      <img
        src={aboutbg}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - animated image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={philosophyimage}
              alt="The Philosophy Behind Our Product"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          {/* Right column - animated text & button */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              The Philosophy Behind Our Products
            </motion.h2>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-700 space-y-4"
            >
              <p>
                Ayurveda, an age-old Indian system of medicine deeply rooted in{" "}
                <span className="font-semibold">philosophy</span>, embraces a
                holistic perspective on health and well-being. It revolves
                around achieving equilibrium among{" "}
                <span className="font-semibold">mind, body, and spirit</span>.
              </p>
            </motion.div>

            {/* CTA Section: Button + Play Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4"
            >
              {/* Read More button */}
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 3xl:px-16 3xl:py-6 tv:px-20 tv:py-12 flex items-center justify-center gap-2 3xl:text-xl tv:text-2xl"
              >
                Read More
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
                  className="h-10 w-10 -rotate-45"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>

              {/* Play video icon + text */}
              <div className="flex items-center space-x-3">
                <div className="p-4 rounded-full border border-black flex items-center justify-center">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
                  Play Video
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
