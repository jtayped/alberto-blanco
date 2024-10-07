"use client";
import { useState, useEffect } from "react";
import { RiScrollToBottomLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true); // Controls visibility
  const [hasScrolled, setHasScrolled] = useState(false); // Tracks if user has scrolled

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setIsVisible(false); // Hide when scrolled past threshold
        setHasScrolled(true); // Ensure it won't reappear
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]); // Dependency on hasScrolled ensures it doesn't reappear

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          style={{ translateX: "-50%" }}
          className="fixed bottom-6 left-1/2 grid justify-items-center text-sm gap-3 w-max"
        >
          <IoChevronDown size={25} className="animate-bounce" />
          Scroll
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Scroll;
