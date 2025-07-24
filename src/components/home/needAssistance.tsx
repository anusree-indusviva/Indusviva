import { motion } from "framer-motion";
import needAssImage from "@/assets/img/NeedAssistance.png"

const NeedAssistance = () => {

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
      <div className="max-w-4xl mx-auto">
        {/* <motion.div
          variants={itemVariants}
          className="bg-teal-100 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Need assistance?
              </h3>
              <p className="text-gray-600 mb-2">Reach out to our team</p>
              <p className="text-sm text-gray-500 mb-6">
                Have a question about our products or services? We're happy to
                help — just feel free to ask.
              </p>
              <Link to={"/contact-us"}>
                <Button className="group bg-teal-600 hover:bg-teal-700">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div> */}
        <img src={needAssImage} alt="banner" className="w-full h-full object-cover mt-10" />
      </div>
    </motion.section>
  );
};

export default NeedAssistance;
