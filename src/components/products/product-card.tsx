import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface ProductCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  pv: number;
  more_info: string;
  description: string;
  benefits: any; 
  usage: string;
}

function ProductCard({
  id,
  name,
  img,
  price,
  pv,
  more_info,
  description,
  benefits,
  usage,
}: ProductCardProps) {

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {name}
        </h3>

        <div className="flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-emerald-600">
            ₹{price.toLocaleString()}
          </span>
        </div>

        <Link
          to={`product/${id}`}
          state={{
            product: {
              name,
              img,
              price,
              id,
              pv,
              more_info,
              description,
              benefits,
              usage,
            },
          }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Know More
            </Button>
          </motion.div>
        </Link>
      </div>

      {/* Border animation on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-200 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default ProductCard;
