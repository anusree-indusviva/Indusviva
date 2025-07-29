import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const NeedAssistance = () => {
  const router = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="px-4 py-10 bg-stone-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative p-6 sm:p-10 md:p-12 bg-[url('/Footerneedassistance.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
            <div className="hidden md:block" />

            <div className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Need assistance?
              </h3>
              <p className="text-white text-lg sm:text-xl mb-2">
                Reach out to our team
              </p>
              <p className="text-sm sm:text-base text-gray-100 mb-6">
                Have a question about our products or services? We're happy to
                help — just feel free to ask.
              </p>
              <Button
                className="group bg-white text-black hover:bg-black hover:text-white transition-colors"
                onClick={() => router("/contact-us")}
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NeedAssistance;
