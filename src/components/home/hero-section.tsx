import { motion } from "framer-motion";
import home3 from "@/assets/img/new/home-3-hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 z-10">
        <div
          className={`absolute inset-0' bg-cover bg-center opacity-70"`}
        ></div>
        <img src="./HeroSection.png" alt="mainBg" className=" w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-800/30"></div>
      </div>

      <div className="container relative z-10 px-4 py-24 sm:px-6 lg:px-8 xl:max-w-[70%] mx-auto  h-full flex items-center my-5">
        <div className="max-w-4xl 3xl:max-w-full  lg:mx-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl 3xl:text-8xl tv:text-[12rem] uppercase text-amber-100 dancing-script-600">
              Where Wellness <br />
              <div className="mt-2 3xl:mt-4  flex gap-2 items-center">
                <img src={home3} alt="home" className=" w-20 h-20 " />
                <span>Meets Nature</span>
              </div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl 3xl:max-w-4xl tv:max-w-6xl dancing-script-500"
          >
            <p className="text-lg text-amber-50 3xl:text-xl tv:text-4xl">
              How would it be if you were to possess robust Wellness and Wealth?<br/>
              IndusViva is driven by the mission to empower human lives.<br/> Your
              empowerment can be an inspiration to millions!
            </p>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
}
