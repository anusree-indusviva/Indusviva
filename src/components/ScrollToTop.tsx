import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop Component
 *
 * Automatically scrolls the window to the top whenever the route path (pathname) changes.
 * Improves user experience during navigation by ensuring the user starts at the top of each page.
 */
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
  }, [pathname])

  return null; 
};

export default ScrollToTop;
