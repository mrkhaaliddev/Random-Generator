"use client";

import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { motion } from "framer-motion";

const Count = ({
  CountOne,
  CountTwo,
  CountThree,
  CountFour,
}: {
  CountOne: string;
  CountTwo: string;
  CountThree: string;
  CountFour: string;
}) => {
  const carsRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const visitorsRef = useRef<HTMLDivElement | null>(null);
  const storiesRef = useRef<HTMLDivElement | null>(null);

  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    if (hasCounted) return;

    if (
      !carsRef.current ||
      !reviewsRef.current ||
      !visitorsRef.current ||
      !storiesRef.current
    )
      return;

    const formattingFn = (value: number) => `${value}K`;
    // Initialize CountUp instances
    const carsCountUp = new CountUp(carsRef.current, 190, {
      formattingFn,
    });
    const reviewsCountUp = new CountUp(reviewsRef.current, 17, {
      formattingFn,
    });
    const visitorsCountUp = new CountUp(visitorsRef.current, 50, {
      formattingFn,
    });
    const storiesCountUp = new CountUp(storiesRef.current, 95, {
      formattingFn,
    });

    // Start the animations
    carsCountUp.start();
    reviewsCountUp.start();
    visitorsCountUp.start();
    storiesCountUp.start();

    setHasCounted(true); // Mark as counted to prevent re-animations
  }, [hasCounted]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid items-center justify-around grid-cols-2 px-8 md:px-20 lg:-px-24 gap-y-10 md:gap-y-10 lg:gap-2 md:gap-4 lg:grid-cols-4 pt-16"
      style={{ fontFamily: "monospace" }}
    >
      <motion.div
        variants={itemVariants}
        viewport={{ once: true }}
        className="text-center"
        onViewportEnter={() => !hasCounted && setHasCounted(true)}
      >
        <div ref={carsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountOne}</div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        viewport={{ once: true }}
        className="text-center"
        onViewportEnter={() => !hasCounted && setHasCounted(true)}
      >
        <div ref={reviewsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountTwo}</div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        viewport={{ once: true }}
        className="text-center"
        onViewportEnter={() => !hasCounted && setHasCounted(true)}
      >
        <div ref={visitorsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountThree}</div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        viewport={{ once: true }}
        className="text-center"
        onViewportEnter={() => !hasCounted && setHasCounted(true)}
      >
        <div ref={storiesRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountFour}</div>
      </motion.div>
    </motion.div>
  );
};

export default Count;
