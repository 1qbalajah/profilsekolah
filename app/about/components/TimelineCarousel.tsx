"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function TimelineCarousel({ items }: { items: TimelineItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${items[currentIndex].image})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten teks */}
      <div className="relative z-10 flex items-center justify-start h-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              {items[currentIndex].year}
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              {items[currentIndex].title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              {items[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasi tahun */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4">
        <div className="flex justify-between items-center text-white text-sm md:text-base">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-colors duration-300 ${
                currentIndex === index
                  ? "text-blue-400 font-bold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
        <div className="w-full h-[2px] bg-gray-600 mt-2 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) * 100) / items.length}%`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
