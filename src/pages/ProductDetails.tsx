import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Leaf,
  ShieldCheck,
  TruckIcon,
  Heart,
  Share2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router";
import { useCartStore } from "@/stores/useCartStore";
import { toast } from "sonner";
import { syncOrderSummary } from "@/lib/syncOrderSummary";

// Animation configuration
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProductDetailsPage() {
  const location = useLocation();

  // Global cart store
  const { addToCart, items } = useCartStore();

  // Local state
  const [product, setProduct] = useState<any>({});
  const [mainImage, setMainImage] = useState<string | undefined>(
    location?.state?.product?.img
  );
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const productFromState = location?.state?.product;
    setProduct(productFromState);
    setMainImage(productFromState?.img);
  }, [location]);

  const showAlertToast = (id: number, name: string) => {
    const isExist = items.find((item: any) => item.id === id);
    toast.success(
      isExist ? `${name} already exist!` : `${name} added to cart!`,
      {
        position: "top-right",
      }
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-20 text-gray-900 min-h-screen">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
          {/* Left: Image Section */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:sticky lg:top-4"
            >
              <div className="border border-gray-200 rounded-lg bg-white p-2 sm:p-4">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="Product Preview"
                  className="rounded-lg w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[600px] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Thumbnail gallery (supports multiple thumbnails in future) */}
              <div className="flex space-x-2 mt-2 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
                <div
                  className="border-2 rounded-md cursor-pointer flex-shrink-0"
                  onClick={() => setMainImage(product?.img)}
                >
                  <img
                    src={product?.img || "/placeholder.svg"}
                    alt="Thumbnail"
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
            {/* Product title and ratings */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
                {product?.name}
              </h1>

              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer">
                  426 ratings
                </span>
              </div>
            </motion.div>

            {/* Price block */}
            <div className="border-t border-b border-gray-200 py-3 sm:py-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                ₹ {product?.price}
              </span>
            </div>

            {/* Badges + Features */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-green-100 text-green-800 text-xs py-1 px-2 sm:px-3 rounded-full">
                  Batch Consistency | Forskolin Rich | Naturally Thermogenic
                </Badge>
                <Badge className="bg-green-700 text-white text-xs py-1 px-2 sm:px-3 rounded-full">
                  Organic Certified
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <Feature icon={<Leaf />} label="100% Natural" />
                <Feature icon={<ShieldCheck />} label="Quality Tested" />
                <Feature icon={<TruckIcon />} label="Fast Shipping" />
                <Feature icon={<Star />} label="Top Rated" />
              </div>
            </motion.div>

            {/* Support block */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-2 bg-gray-50 p-4 rounded-lg"
            >
              <div className="text-sm text-gray-600">
                <p>
                  <strong>Toll free no:</strong> 1800 103 4916
                </p>
                <p>
                  <strong>Email:</strong> support@indusviva.com
                </p>
              </div>
            </motion.div>

            {/* Quantity input */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
              className="space-y-3 sm:space-y-4 bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100"
            >
              <div className="flex justify-between items-center">
                <label
                  htmlFor="quantity"
                  className="text-sm sm:text-base font-medium"
                >
                  Quantity:
                </label>
                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              </div>
            </motion.div>

            {/* Actions: Add to cart + Buy now */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg"
                  onClick={() => {
                    addToCart(product, quantity);
                    showAlertToast(product.id, product.name);
                    syncOrderSummary();
                  }}
                >
                  Add to Cart
                </Button>

                <Link to={"/cart"}>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg"
                    onClick={() => {
                      addToCart(product, quantity);
                      showAlertToast(product.id, product.name);
                      syncOrderSummary();
                    }}
                  >
                    Buy Now
                  </Button>
                </Link>
              </div>

              {/* More info link */}
              <div className="my-5 flex items-center">
                <a
                  href={product?.more_info}
                  className="underline text-blue-400 text-xl p-5"
                >
                  Get to Know More About iCoffee
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 -rotate-45 text-blue-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              {/* Product Description Tabs */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-8"
              >
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-4 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {product?.description}
                    </p>
                  </TabsContent>

                  <TabsContent value="benefits" className="mt-4 space-y-4">
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      {product?.benefits
                        ?.split('.",\r\n    "')
                        .map((point: string, index: number) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="usage" className="mt-4 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Recommended Usage:
                      </h4>
                      <p>{product?.usage}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* Wishlist + Share */}
              <div className="flex justify-between pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm text-gray-600 hover:text-green-600 flex items-center gap-1"
                >
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Add to Wishlist</span>
                  <span className="xs:hidden">Wishlist</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm text-gray-600 hover:text-green-600 flex items-center gap-1"
                >
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-green-600">{icon}</span>
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
  );
}

function QuantityInput({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md bg-white">
      <button
        className="px-2 py-1 text-gray-600 hover:text-green-600 text-lg"
        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} 
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => {
          const val = Number.parseInt(e.target.value);
          if (!isNaN(val) && val > 0) setQuantity(val);
        }}
        className="w-10 text-center border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
      />
      <button
        className="px-2 py-1 text-gray-600 hover:text-green-600 text-lg"
        onClick={() => setQuantity((prev) => prev + 1)} 
      >
        +
      </button>
    </div>
  );
}

