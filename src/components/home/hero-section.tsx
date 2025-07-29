import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="relative overflow-hidden h-screen  text-white bg-[url('/HeroSection.png')]  bg-center bg-no-repeat"
      initial={{ scale: 2, x: "30%", y: "10%" }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="container relative z-20 px-4 py-30 mt-10 sm:px-6 lg:px-8 xl:max-w-[80%] mx-auto h-full flex items-center">
        <div className="max-w-4xl 3xl:max-w-full ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: animationComplete ? 1 : 0,
              y: animationComplete ? 0 : 50,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl 3xl:text-9xl tv:text-[12rem] text-amber-50 dancing-script-600">
              Where Innovation <br />
              <motion.div
                className="mt-2 3xl:mt-4 flex gap-2 items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: animationComplete ? 1 : 0,
                  x: animationComplete ? 0 : -30,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                <span>Meets Nature</span>
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: animationComplete ? 1 : 0,
              y: animationComplete ? 0 : 30,
            }}
            transition={{
              duration: 1,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="mt-8 max-w-xl 3xl:max-w-4xl tv:max-w-6xl "
          >
            <p className="text-lg text-amber-50 3xl:text-xl tv:text-4xl leading-relaxed">
              Global wellness begins with nature-backed, science-led <br/>
              nutraceuticals — made in India, trusted worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
