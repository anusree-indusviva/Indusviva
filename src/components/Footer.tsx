
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/img/new/logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {


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

  return (
    <footer
      className="bg-[#2B2B2B] text-white py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Social */}
          <motion.div variants={itemVariants} className=" w-full">
            <div className=" w-[14vw] h-[8vh] my-8">
              <img src={logo} alt="logo" className=" w-full h-full object-cover" />
            </div>

            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-teal-400 hover:text-amber-200 cursor-pointer" />
              <Twitter className="w-5 h-5 text-teal-400 hover:text-amber-200 cursor-pointer" />
              <Instagram className="w-5 h-5 text-teal-400 hover:text-amber-200 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-teal-400 hover:text-amber-200 cursor-pointer" />
              <Youtube className="w-5 h-5 text-teal-400 hover:text-amber-200 cursor-pointer" />
            </div>
          </motion.div>

          {/* Footer Links Section */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-3 text-white text-xl">Main Links</h4>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/careers">Career</Link></li>
              <li><Link to="/medical-panel">Medical Panel</Link></li>
              <li><Link to="/our-products">Our Products</Link></li>
              <li><Link to="/virtual-office">Virtual Office</Link></li>
              <li><Link to="/nutrivigilance">Nutrivigilance</Link></li>
              <li><Link to="/business-model">Business Model</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-3 text-white text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/search-vbos">Search VBOs</Link></li>
              <li><Link to="/compensation-plan">Compensation Plan</Link></li>
              <li><Link to="/compliance-documents">Compliance Documents</Link></li>
              <li><Link to="/service-request">Create Service Request</Link></li>
              <li><Link to="/track-service">Track Service</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-3 text-white text-xl">Policies</h4>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/02/VBO-Contract-C.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  VBO Contract
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/01/Directseller-Application-Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  VBO Application
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/01/policies-and-procedures.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Policies & Procedures
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/02/Return-Refund-Policy_C.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Return and Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/01/Payment-Mode-Policy-C.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Payment Mode Policy
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/01/Grievance-redressal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a
                  href="https://indusviva.com/wp-content/uploads/2025/01/Shipment-and-delivery-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Shipment and Delivery
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
