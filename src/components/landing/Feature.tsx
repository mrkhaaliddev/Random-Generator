"use client";

import Image from "next/image";
import React, { useState } from "react";
import Illustration from "/public/assets/Illustration2.png";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

export default function Feature({
  Title,
  Description,
  Item1,
  Item2,
  Item3,
  Item4,
}: {
  Title: string;
  Description: string;
  Item1: any;
  Item2: any;
  Item3: any;
  Item4: any;
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const hoverVariant = {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <div className="md:px-10 mt-24 mb-6 sm:mb-20 mx-auto" id="feature">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 py-8 my-12">
        {/* Image on the left with animation */}
        <motion.div
          variants={itemVariantsLeft}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          onViewportEnter={() => setHasAnimated(true)}
          viewport={{ once: true }}
          className="h-full w-full p-4"
        >
          <Image
            src={Illustration}
            alt="Our illustration"
            layout="responsive"
            quality={100}
            height={414}
            width={508}
          />
        </motion.div>
        {/* Text content on the right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          onViewportEnter={() => setHasAnimated(true)}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center w-full lg:w-9/12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-semibold leading-relaxed bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            {Title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="my-4 text-gray-600 dark:text-gray-300"
          >
            {Description}
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="flex flex-col gap-3"
          >
            {[Item1, Item2, Item3, Item4].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={hoverVariant}
                className="flex items-center gap-3 cursor-pointer text-gray-900 dark:text-gray-50"
              >
                <CircleCheckBig color="#ef4444" size={18} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
