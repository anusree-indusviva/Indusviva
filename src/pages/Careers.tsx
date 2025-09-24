
import JobList from "../components/JobList";
import { useState } from "react";
import { motion } from "framer-motion";

const FILTERS = [
  { label: "View all", value: "all" },
  { label: "Finance", value: "finance" },
  { label: "IT", value: "it" },
  { label: "Admin", value: "admin" },
  { label: "Special Projects", value: "specialprojects" },
  { label: "HR", value: "hr" },
  { label: "Compliance", value: "compliance" },
];

const Careers = () => {
  const [selected, setSelected] = useState("all");

  return (
    <section className="bg-white min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto pt-48 pb-12 px-4 sm:px-6 lg:px-8 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-teal-700 font-medium mb-2 text-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          We are Hiring
        </motion.p>
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Be a part of our amazing team
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Join a team of diverse, talented individuals and help us build a culture that empowers everyone to thrive.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {FILTERS.map((filter, idx) => (
            <motion.button
              key={filter.value}
              className={`px-5 py-2 rounded-full border border-gray-300 font-semibold shadow transition-colors ${selected === filter.value ? "bg-black text-white" : "bg-white text-gray-700"}`}
              onClick={() => setSelected(filter.value)}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="border-t border-black w-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
        <JobList filter={selected} />
      </motion.div>
    </section>
  );
};

export default Careers;
