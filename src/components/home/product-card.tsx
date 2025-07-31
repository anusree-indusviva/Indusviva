import { motion } from "framer-motion";

function ProductCard({
  img,
  name,
  ind,
}: {
  img: any;
  name: string;
  ind: number;
}) {
  return (
    <motion.div
      className="relative group overflow-hidden bg-white rounded-2xl shadow-md p-3 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {ind % 2 === 0 && (
        <motion.h3
          className="text-xl font-bold text-center text-gray-800 py-6 my-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="line-clamp-1">{name}</span>
        </motion.h3>
      )}
      <div className="relative overflow-hidden rounded-2xl">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      {ind % 2 === 1 && (
        <motion.h3
          className="text-xl font-bold text-center text-gray-800 py-6 my-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="line-clamp-1">{name}</span>
        </motion.h3>
      )}
    </motion.div>
  );
}

export default ProductCard;
