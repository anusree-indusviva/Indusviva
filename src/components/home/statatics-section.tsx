
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StataticsSection = () => {
  const statistics = [
    { number: 5000000, suffix: "+", label: "Product Users" },
    { number: 600, suffix: "+", label: "Weeks of Operations" },
    { number: 35, suffix: "+", label: "Countries served" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 bg-gradient-to-r from-teal-800 to-cyan-700 text-white  "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="space-y-2"
            >
              <div className="text-5xl font-extrabold text-white">
                {inView && (
                  <CountUp end={stat.number} duration={3} separator="," />
                )}
                <span className="text-teal-200">{stat.suffix}</span>
              </div>
              <div className="text-cyan-100 text-lg font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StataticsSection;
