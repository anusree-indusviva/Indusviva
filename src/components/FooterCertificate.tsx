import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error 
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Static imports for all certificate images
import certificate1 from "../assets/img/certificate/Certificate-1.png";
import certificate2 from "../assets/img/certificate/Certificate-2.png";
import certificate3 from "../assets/img/certificate/Certificate-3.png";
import certificate4 from "../assets/img/certificate/Certificate-4.png";
import certificate5 from "../assets/img/certificate/Certificate-5.png";
import certificate6 from "../assets/img/certificate/Certificate-6.png";
import certificate7 from "../assets/img/certificate/Certificate-7.png";
import certificate8 from "../assets/img/certificate/Certificate-8.png";
import certificate9 from "../assets/img/certificate/Certificate-9.png";
import certificate10 from "../assets/img/certificate/Certificate-10.png";
import certificate11 from "../assets/img/certificate/Certificate-11.png";
import certificate12 from "../assets/img/certificate/Certificate-12.png";
import certificate13 from "../assets/img/certificate/Certificate-13.png";
import certificate14 from "../assets/img/certificate/Certificate-14.png";

/**
 * FooterCertificateSlider
 * Horizontally scrolling certificate images for credibility display.
 */
const FooterCertificateSlider = () => {
  // Array of all certificate image imports
  const certificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
    certificate7,
    certificate8,
    certificate9,
    certificate10,
    certificate11,
    certificate12,
    certificate13,
    certificate14,
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true} 
      speed={5000} 
      spaceBetween={30} 
      allowTouchMove={false} 
      grabCursor={true} 
      autoplay={{
        delay: 1, 
        disableOnInteraction: false, 
      }}
      slidesPerView={2} 
      breakpoints={{
        480: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
      className="w-full py-6 md:mt-10 mt-4"
    >
      {certificates.map((src, idx) => (
        <SwiperSlide
          key={idx}
          className="flex justify-center items-center"
        >
          <img
            src={src}
            alt={`certificate-${idx + 1}`} 
            className="h-10 sm:h-12 object-contain mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FooterCertificateSlider;
