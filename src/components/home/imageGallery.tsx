import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import icare from "@/assets/img/iCare.jpg";
import iCoffee from "@/assets/img/iCoffee.jpg";
import iGlow from "@/assets/img/iGlow.jpg";
import iSlim from "@/assets/img/iSlim.jpg";
import iPulse from "@/assets/img/iPulse.jpg";


const images = [iPulse,icare, iCoffee, iGlow, iSlim];

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-2 h-[25vh] xl:h-[45vh]  tv:max-h-[25vh]  overflow-hidden px-4">
      {images.map((src, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative rounded-[40px] overflow-hidden cursor-pointer",
              "transition-all duration-500",
              isActive ? "flex-[3]" : "flex-[0.7]"
            )}
            layout
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
