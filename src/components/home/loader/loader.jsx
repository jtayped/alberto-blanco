"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const duration = 1250;
const Loader = ({ setLoading }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const timeLeft = duration - elapsedTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setLoading(false);
      } else {
        // Randomly increase the percentage based on remaining time
        const randomIncrease = Math.random() * (100 - percentage) * 0.2;
        setPercentage((prev) => Math.min(100, prev + randomIncrease));
      }
    }, 50); // Update interval (in milliseconds)

    return () => clearInterval(interval);
  }, [setLoading, duration]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-background">
      <motion.div
        className="grid w-2/3 md:max-w-[300px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.img
          src="/gallery/1.webp"
          layoutId="main-img"
          alt="Alberto Blanco"
        />
        <div className="relative flex justify-center items-center py-2 text-center">
          <motion.div
            className="absolute left-0 h-full bg-foreground"
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-lg dark:text-background font-semibold filter invert mix-blend-difference">
            {Math.floor(percentage)}%
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
