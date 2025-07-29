import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router";
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
      className=" px-4 bg-stone-100 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto my-4">
        
        <motion.div
          className="relative p-8 h-[40vh] bg-[url('/Footerneedassistance.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div></div>
            <div>
              <h3 className="text-4xl font-bold text-gray-100 mb-2">
                Need assistance?
              </h3>
              <p className="text-gray-100 mb-2 text-xl">Reach out to our team</p>
              <p className="text-md text-gray-100 mb-6">
                Have a question about our products or services? We're happy to
                help — just feel free to ask.
              </p>
              <Link to={"/contact-us"}>
                <Button
                  className="group bg-white text-black hover:text-white cursor-pointer"
                  onClick={() => {
                    router("/contact-us");
                  }}
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
       
      </div>
    </motion.section>
  );
};

export default NeedAssistance;
