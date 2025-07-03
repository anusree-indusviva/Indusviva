import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";
import aboutImage from "@/assets/img/aboutimage.jpg";

// FAQ data 
const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life.",
  },
];

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: FAQ Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-600" />
              <span className="text-teal-600 font-medium">
                CLIENT QUESTIONS
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              GENERAL QUESTIONS
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8">
              Augue ullamcorper nunc libero augue blandit habitant purus felis
              quam persui nisi lectus. augue lobortis nostra placerat penatibus
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-teal-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-content-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 border-t border-gray-200 bg-gray-50 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-200 rounded-lg aspect-square overflow-hidden">
              <img
                src={aboutImage}
                alt="About image"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
