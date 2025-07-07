import { useState, useEffect } from "react";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router";
import logo from "@/assets/img/new/logo.svg";
import logoblack from "@/assets/img/new/logo-black.png";
import { useDialogStore } from "@/stores/usedialogStrore";
import axios from "axios";
import CartSheet from "./cart/CartSheet";

interface Product {
  id: string;
  product_name: string;
  thumbnail_url: string;
  selling_price: number;
  pv: number;
  description: string;
  more_info: string;
  usage: string;
  benefits: string;
}

export default function Navbar() {
  const { openDialog } = useDialogStore();
  const [scrolled, setScrolled] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://uat-api.machinesarehere.com/sales/v1/website/products"
        );
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    fetchProducts();
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Home",
    "About",
    "Medical Panel",
    "Our Products",
    "Virtual Office",
    "Nutrivigilance",
    "Contact Us",
    "Business Model",
    "Customer Care",
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#62bf9a54] backdrop-blur-xl"
          : "bg-transparent shadow-xs shadow-gray-100/20"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-20  julee-regular">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 max-w-[95%] h-20 tv:h-30">
          <div className="flex h-16 items-center justify-between tv:h-30">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="logo"
                  className="md:w-40 md:h-40 w-30 h-30"
                />
              </Link>
            </div>

            <nav className="hidden xl:flex  items-center justify-evenly w-full p-2">
              {navItems.map((item) =>
                item === "Our Products" ? (
                  <div className="relative group" key={item}>
                    <Link to={"/our-products"}>
                      <p className="text-white cursor-pointer transition-colors  3xl:text-lg tv:text-4xl">
                        {item}
                      </p>
                    </Link>

                    {products?.length > 0 && (
                      <div className="absolute -left-5 top-full mt-3 w-[20vw] bg-white text-black shadow-lg rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0 z-50 p-5">
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            to={`/our-products/product/${product.id}`}
                            state={{
                              product: {
                                name: product?.product_name,
                                img: product?.thumbnail_url,
                                price: product?.selling_price,
                                id: product?.id,
                                pv: product?.pv,
                                description: product?.description,
                                more_info: product?.more_info,
                                usage: product?.usage,
                                benefits: product?.benefits,
                              },
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 rounded"
                          >
                            <span className="text-black">
                              {product.product_name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item}
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="text-white transition-colors 3xl:text-xl tv:text-4xl"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center space-x-6">
              <User
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer transition-colors hover:text-gray-300"
                onClick={openDialog}
                color="white"
              />
              <CartSheet />
              <Sheet >
                <SheetTrigger asChild style={{ cursor: "pointer" }} className="xl:hidden">
                  <Menu className="h-7 w-7" color="white" />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[320px] px-6 pt-6 overflow-y-scroll "
                >
                  <div className="flex items-center justify-between mb-8">
                    <img src={logoblack} alt="Logo" className="h-8" />
                  </div>

                  <nav className="space-y-4 xl:hidden flex flex-col">
                    {navItems.map((item) =>
                      item === "Our Products" ? (
                        <div className="relative" key={item}>
                          <Link to={"/our-products"}>
                            <span className="text-black cursor-pointer transition-colors 3xl:text-xl tv:text-4xl">
                              {item}
                            </span>
                          </Link>
                        </div>
                      ) : (
                        <Link
                          key={item}
                          to={
                            item === "Home"
                              ? "/"
                              : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="text-black transition-colors 3xl:text-xl tv:text-4xl"
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </nav>

                  <div className="my-6 border-t pt-4" />

                  <div className="space-y-3 text-sm text-black">
                    <h3 className="text-base font-bold">Information</h3>
                    <p>📞 1800 103 4916</p>
                    <p>📧 support@indusviva.com</p>
                    <p>
                      📍 IndusViva HealthSciences Private Limited, No 92-1–36,
                      <br />
                      Viva Tower, Nandi Durga Road,
                      <br />
                      Jayamahal Extension, Bangalore (Bangalore) Urban,
                      Karnataka – 560046.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
