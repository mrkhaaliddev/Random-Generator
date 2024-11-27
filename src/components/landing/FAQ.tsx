"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ({
  Q1,
  A1,
  Q2,
  A2,
  Q3,
  A3,
  Q4,
  A4,
  Q5,
  A5,
}: {
  Q1: string;
  A1: string;
  Q2: string;
  A2: string;
  Q3: string;
  A3: string;
  Q4: string;
  A4: string;
  Q5: string;
  A5: string;
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 70, filter: "blur(5px)" },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-24"
    >
      <motion.h1
        variants={itemVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Frequently asked questions
      </motion.h1>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="pt-4 text-slate-600 dark:text-slate-300"
      >
        Can't find the answer you're looking for?{" "}
        <a href="mailto: khaalidyare344@gmail.com" className="text-primary">
          Reach out to us
        </a>{" "}
        and we will get in touch with you
      </motion.p>
      <Accordion type="single" collapsible className="mt-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>{Q1}</AccordionTrigger>
          <AccordionContent>{A1}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{Q2}</AccordionTrigger>
          <AccordionContent>{A2}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{Q3}</AccordionTrigger>
          <AccordionContent>{A3}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{Q4}</AccordionTrigger>
          <AccordionContent>{A4}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{Q5}</AccordionTrigger>
          <AccordionContent>{A5}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
