"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

import AboutHeart1 from "../../../assets/Images/AboutHeart.png";
import AboutHeart2 from "../../../assets/Images/HeartCharacterAbout.png";
import AboutHeart3 from "../../../assets/Images/watch1.png";
import AboutHeart3Alt from "../../../assets/Images/watch2.png";
import AboutHeart3Alt1 from "../../../assets/Images/watch3.png";
import AboutHeart3Alt2 from "../../../assets/Images/watch4.png";
import AboutHeart4 from "../../../assets/Images/HeartAbout.png";
import S_IMAGE from "../../../assets/Images/S_IMAGE.png";

import AboutBg from "../../../assets/Images/DALL·E 2025-02-05 08.28.46 - A serene and artistic landscape composition with small purple and pink flowers positioned in the corner of the image. The flowers should be soft and d.webp";

const AboutPage: React.FC = () => {
  const swipeImages: StaticImageData[] = [
    AboutHeart3,
    AboutHeart3Alt,
    AboutHeart3Alt1,
    AboutHeart3Alt2,
  ];
  const [swipeIndex, setSwipeIndex] = useState(0);

  const nextImage = () =>
    setSwipeIndex((prev) => (prev + 1) % swipeImages.length);
  const prevImage = () =>
    setSwipeIndex(
      (prev) => (prev - 1 + swipeImages.length) % swipeImages.length
    );

  const steps = [
    {
      id: 1,
      title: "What is WUSLE?",
      description:
        "WUSLE is an innovative platform that seamlessly integrates health and technology. Our solution rewards users with Heart Coins—a digital currency earned by tracking and improving their heart health. By promoting an active lifestyle, WUSLE encourages individuals to prioritize their well-being while embracing the future of digital rewards.",
      image: AboutHeart1,
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "Founded with a mission to revolutionize health tracking through blockchain technology, WUSLE empowers users to achieve their fitness goals while benefiting from state-of-the-art innovation. We are committed to making health improvements engaging and rewarding, fostering a healthier global community.",
      image: AboutHeart2,
    },
    {
      id: 3,
      title: "Why Choose WUSLE?",
      description:
        "We prioritize integrity, innovation, and inclusivity using cutting-edge blockchain technology to make health improvements engaging and rewarding. Your heartbeat fuels a global movement focused on well-being.",
      swipeable: true,
    },
    {
      id: 4,
      title: "Our Journey",
      description:
        "What began as an idea has evolved into a thriving global platform. WUSLE has bridged the gap between advanced health tracking and blockchain technology, creating a transformative experience for users. Join us as we continue to shape the future of personalized health and rewards.",
      image: AboutHeart4,
    },
  ];

  return (
    <div className="overflow-x-hidden relative min-h-screen py-16 flex flex-col items-center justify-center bg-gradient-to-tr from-gray-700 to-purple-500">
      <Image
        src={AboutBg}
        alt="Background"
        fill
        className="object-cover opacity-40"
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:text-7xl text-2xl text-yellow-50 font-extrabold  tracking-wide drop-shadow-lg "
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ABOUT WU
          </motion.span>
          <span className="relative inline-block align-middle size-20 sm:size-20 lg:size-32 z-50">
            <Image src={S_IMAGE} alt="S" fill className="object-contain" />
          </span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            LE
          </motion.span>
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 z-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className={`step flex flex-col md:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center relative">
              {step.swipeable ? (
                <div className="relative w-full max-w-lg flex items-center justify-center">
                  {/* Left Arrow */}
                  <button
                    onClick={prevImage}
                    className="absolute left-0 p-2 bg-white bg-opacity-30 rounded-full shadow-md hover:bg-opacity-50 transition"
                  >
                    <ChevronLeft size={40} className="text-gray-800" />
                  </button>

                  {/* Swipeable Image */}
                  <motion.div
                    key={swipeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={swipeImages[swipeIndex]}
                      alt={step.title}
                      className="object-cover w-full h-auto rounded-lg"
                      width={500}
                      height={350}
                    />
                  </motion.div>

                  {/* Right Arrow */}
                  <button
                    onClick={nextImage}
                    className="absolute right-0 p-2 bg-white bg-opacity-30 rounded-full shadow-md hover:bg-opacity-50 transition"
                  >
                    <ChevronRight size={40} className="text-gray-800" />
                  </button>
                </div>
              ) : (
                <Image
                  src={step.image ? step.image : AboutHeart1}
                  alt={step.title}
                  className="object-cover w-full h-auto rounded-lg"
                  width={500}
                  height={350}
                />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full sm:w-3/4 md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                {step.title}
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
