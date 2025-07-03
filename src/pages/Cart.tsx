// Dependencies
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import {
  ShoppingCart,
  Trash2,
  Package,
  Truck,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

// Store and logic
import { useCartStore } from "@/stores/useCartStore";
import { syncOrderSummary } from "@/lib/syncOrderSummary";

// UI Components
import NavigationHeroSection from "@/components/NavigationHeroSection";
import AddressForm from "@/components/checkout/address-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export default function CheckoutPage() {
  // On component mount, sync the latest order summary
  useEffect(() => {
    syncOrderSummary();
  }, []);

  // Get cart state and methods from global store
  const {
    items: products,
    clearCart,
    cartSummary,
    updateQuantity,
    removeFromCart,
  } = useCartStore();

  // Intersection observer to trigger animation when in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Update quantity logic
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(parseInt(productId), newQuantity);
      syncOrderSummary();
    }
  };

  // Remove product from cart
  const handleRemoveItem = (productId: string) => {
    removeFromCart(parseInt(productId));
    syncOrderSummary();
  };

  // Clear the entire cart
  const handleCartClear = () => {
    clearCart();
    syncOrderSummary();
  };

  // Framer Motion animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
    >
      {/* Page title and breadcrumb */}
      <NavigationHeroSection title="Cart" path="Cart" />

      <div className="py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full"
          >
            {/* Two-column layout: Cart items (left), Address form (right) */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full place-items-baseline">
              
              {/* Order Summary Section */}
              <motion.div
                variants={itemVariants}
                className="xl:col-span-1 order-2 xl:order-1 w-full"
              >
                <Card className="shadow-lg border-0">
                  
                  {/* Summary Header */}
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                        <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="hidden sm:inline">Order Summary</span>
                        <span className="sm:hidden">Your Order</span>
                        <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs">
                          {cartSummary?.total_items}{" "}
                          {cartSummary?.total_items === 1 ? "item" : "items"}
                        </Badge>
                      </CardTitle>

                      {/* "Clear Cart" button */}
                      {products.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCartClear}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs sm:text-sm self-start sm:self-center"
                        >
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Clear
                        </Button>
                      )}
                    </div>
                  </CardHeader>

                  {/* Summary Content: Product List or Empty Message */}
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    {cartSummary?.order_item_list?.length > 0 ? (
                      <>
                        {cartSummary?.order_item_list?.map(
                            (product: any, index: number) => (
                              <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex gap-3 sm:hidden">
                                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                                    <img
                                      src={
                                        product.thumbnail_url ||
                                        "/placeholder.svg?height=64&width=64" ||
                                        "/placeholder.svg"
                                      }
                                      alt={product.product_name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-2">
                                      <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 flex-1 pr-2">
                                        {product?.product_name}
                                      </h3>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          handleRemoveItem(product.id)
                                        }
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 h-auto min-w-0"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </Button>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">
                                      ₹{product?.selling_price} each
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() =>
                                            handleQuantityChange(
                                              product.id,
                                              product.quantity - 1
                                            )
                                          }
                                          disabled={product.quantity <= 1}
                                          className="h-6 w-6 p-0 hover:bg-gray-200"
                                        >
                                          <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                          {product?.quantity}
                                        </span>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() =>
                                            handleQuantityChange(
                                              product.id,
                                              product.quantity + 1
                                            )
                                          }
                                          className="h-6 w-6 p-0 hover:bg-gray-200"
                                        >
                                          <Plus className="h-3 w-3" />
                                        </Button>
                                      </div>
                                      <p className="font-semibold text-sm">
                                        ₹
                                        {product?.item_total_amount?.toFixed(2)}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="hidden sm:flex items-center gap-4">
                                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                                    <img
                                      src={
                                        product?.thumbnail_url ||
                                        "/placeholder.svg?height=80&width=80" ||
                                        "/placeholder.svg"
                                      }
                                      alt={product?.product_name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 truncate text-sm md:text-base">
                                      {product?.product_name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500">
                                      ₹{product?.selling_price} each
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2 md:gap-4">
                                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          handleQuantityChange(
                                            product.id,
                                            product.quantity - 1
                                          )
                                        }
                                        disabled={product.quantity <= 1}
                                        className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-gray-200"
                                      >
                                        <Minus className="h-3 w-3 md:h-4 md:w-4" />
                                      </Button>
                                      <span className="px-2 md:px-3 text-sm md:text-base font-medium min-w-[2rem] md:min-w-[2.5rem] text-center">
                                        {product?.quantity}
                                      </span>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          handleQuantityChange(
                                            product.id,
                                            product.quantity + 1
                                          )
                                        }
                                        className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-gray-200"
                                      >
                                        <Plus className="h-3 w-3 md:h-4 md:w-4" />
                                      </Button>
                                    </div>

                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        handleRemoveItem(product.id);
                                        syncOrderSummary();
                                      }}
                                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 md:p-2"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>

                                    <div className="text-right min-w-[4rem] md:min-w-[5rem]">
                                      <p className="font-semibold text-sm md:text-lg">
                                        ₹
                                        {product?.item_total_amount?.toFixed(2)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )
                          )}
                        {/* Order breakdown: Subtotal, Shipping, Tax, PV */}
                        <Separator />
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-sm sm:text-base text-gray-600">
                            <span>Subtotal</span>
                            <span>₹{cartSummary?.total_price}</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base text-gray-600">
                            <span className="flex items-center gap-1">
                              <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="hidden sm:inline">Shipping</span>
                              <span className="sm:hidden">Ship</span>
                            </span>
                            <span>₹{cartSummary?.total_handling_charge}</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base text-gray-600">
                            <span>Tax (18%)</span>
                            <span>₹{cartSummary?.total_tax}</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base text-gray-600">
                            <span>PV</span>
                            <span>₹{cartSummary?.total_pv}</span>
                          </div>

                          <Separator />
                          {/* Final total */}
                          <div className="flex justify-between text-lg sm:text-xl font-bold text-gray-900">
                            <span>Total</span>
                            <span>₹{cartSummary?.total_amount}</span>
                          </div>

                          {/* Proceed to Checkout */}
                          <Link to={"/checkout"}>
                            <Button
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
                              onClick={syncOrderSummary}
                            >
                              <div className="flex items-center gap-2 cursor-pointer">
                                <span className="hidden sm:inline">Checkout</span>
                                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </Button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      // Fallback when cart is empty
                      <div className="text-center py-8 sm:py-12">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <ShoppingCart className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                            Cart is empty
                          </h3>
                          <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto px-4">
                            Add some products to your cart to see them here.
                          </p>
                          <Link to="/our-products">
                            <Button className="mt-3 sm:mt-4">
                              <Package className="h-4 w-4 mr-2" />
                              Shop Now
                            </Button>
                          </Link>
                        </motion.div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Delivery Address Form Section */}
              <motion.div
                variants={itemVariants}
                className="xl:col-span-1 order-1 xl:order-2 w-full"
              >
                <div className="sticky top-4">
                  <AddressForm />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

 