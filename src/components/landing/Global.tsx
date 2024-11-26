"use client";

import Image from "next/image";
import React from "react";
import Map from "/public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";

export default function Global({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-12 w-full px-8 mt-16"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl lg:text-4xl font-semibold text-center leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
      >
        {Title}
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="leading-normal text-center mx-auto py-3 w-10/12 sm:w-7/12 lg:w-6/12 text-gray-600 dark:text-gray-300"
      >
        {Description}
      </motion.p>
      <motion.div variants={itemVariantsLeft}>
        <Image
          src={Map}
          alt="Map"
          layout="responsive"
          width={500}
          height={300}
          className="w-full h-auto mt-10"
        />
      </motion.div>
    </motion.div>
  );
}
