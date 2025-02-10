"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const textItems = [
    "IN PROGRESS",
    "Coinstore.com",
    "BLOCKCHAIN NETWORK",
    "IN PROGRESS",
    "BLOCKCHAIN NODE",
    "SECURE TRANSACTION",
  ];

  const colors = [
    "text-red-500", // Red
    "text-blue-500", // Blue
    "text-green-500", // Green
    "text-yellow-500", // Yellow
    "text-purple-500", // Purple
    "text-teal-500", // Teal
    "text-orange-500", // Orange
    "text-pink-500", // Pink
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-tr from-gray-700 to-purple-500">
      {/* Scrolling Marquee */}
      <div className="w-full overflow-hidden py-6 sm:py-8">
        <motion.div
          className="flex gap-6 sm:gap-8 whitespace-nowrap text-lg sm:text-xl md:text-2xl font-medium uppercase"
          initial={{ x: "100%" }}
          animate={{ x: isPaused ? "0%" : "-100%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          {Array(15)
            .fill("")
            .flatMap(() => textItems)
            .map((item, index) => (
              <motion.span
                key={index}
                className={`px-2 sm:px-6 md:px-8 group ${
                  colors[index % colors.length]
                }`}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {item}
              </motion.span>
            ))}
        </motion.div>

        {/* Secondary Marquee Layer */}
        <div className="flex gap-6 sm:gap-8 whitespace-nowrap text-base sm:text-xl md:text-2xl font-medium uppercase bg-purple-600 py-8 px-6 sm:px-10 -skew-y-3">
          {Array(15)
            .fill("")
            .flatMap(() => textItems)
            .map((item, index) => (
              <motion.span
                key={index}
                className={`px-2 sm:px-6 md:px-8 group ${
                  colors[index % colors.length]
                }`}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {item}
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  );
}
