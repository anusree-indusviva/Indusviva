import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import dummymember from "@/assets/img/new/dummy-member-01.jpg";

const teamMembers = [
  {
    id: 1,
    name: "XXX",
    image: dummymember,
  },
  {
    id: 2,
    name: "XXX",
    image: dummymember,
  },
  {
    id: 2,
    name: "XXX",
    image: dummymember,
  },
];

const MedicalPanel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref}>
       <div className=" min-h-[50vh] h-[50vh]">
        <img
          src="./MEDICALPANEL.jpg"
          alt="productbanner"
          className=" h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 max-w-7xl mx-auto"
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={itemVariants} className="group">
            <motion.div
              initial={{ width: "10%" }}
              animate={inView ? { width: "100%" } : { width: "10%" }}
              transition={{ duration: 0.8, delay: 0.3 + member.id * 0.1 }}
              className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 shadow-lg shadow-gray-300"
            >
              <div className="aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <div className="flex justify-center gap-4"></div>
                </div>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MedicalPanel;
