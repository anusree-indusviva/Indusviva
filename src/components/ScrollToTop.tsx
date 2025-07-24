import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
