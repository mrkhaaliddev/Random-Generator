"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useState } from "react";

export const Banner = ({
  SubTitle,
  Title,
  Description,
  ButtonOne,
  ButtonTwo,
}: {
  SubTitle: string;
  Title: string;
  Description: string;
  ButtonOne: string;
  ButtonTwo: string;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      className="max-w-7xl mx-auto px-6 lg:px-8"
      style={{ paddingTop: "96px" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="blur-3xl rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 w-60 h-60 opacity-40 transform rotate-45"></div>
        <div className="blur-2xl rounded-full bg-gradient-to-r from-yellow-500 via-green-400 to-blue-500 w-40 h-40 opacity-30 transform -translate-x-10 -translate-y-10"></div>
        <div className="blur-2xl rounded-full bg-gradient-to-r from-purple-600 via-red-400 to-orange-400 w-40 h-32 opacity-50 transform translate-x-10 translate-y-10"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        onViewportEnter={() => setHasAnimated(true)}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-50/20 p-1 pr-2"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 text-sm font-medium leading-6 shadow-sm hover:bg-blue-200 dark:hover:bg-gray-600 transition ease-in-out duration-200"
          >
            {SubTitle}
          </motion.span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          {Title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
        >
          {Description}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link href="/fun_facts">
            <Button variant="default" size="lg" className="text-white">
              {ButtonOne}
            </Button>
          </Link>
          <a href="mailto:khaalidyare344@gmail.com">
            <Button variant="outline" size="lg">
              {ButtonTwo}
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
