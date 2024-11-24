"use client";
import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
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

  useEffect(() => {
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
      enableScrollSpy: true,
      formattingFn,
    });
    const reviewsCountUp = new CountUp(reviewsRef.current, 17, {
      enableScrollSpy: true,
      formattingFn,
    });
    const visitorsCountUp = new CountUp(visitorsRef.current, 50, {
      enableScrollSpy: true,
      formattingFn,
    });
    const storiesCountUp = new CountUp(storiesRef.current, 95, {
      // Changed dealersCountUp to storiesCountUp
      enableScrollSpy: true,
      formattingFn,
    });
    // Start the animations
    carsCountUp.start();
    reviewsCountUp.start();
    visitorsCountUp.start();
    storiesCountUp.start();
  }, []);

  return (
    <div
      className="grid items-center justify-around grid-cols-2 px-8 md:px-20 lg:-px-24 gap-y-10 md:gap-y-10 lg:gap-2 md:gap-4 lg:grid-cols-4 pt-16"
      style={{ fontFamily: "monospace" }}
    >
      <div className="text-center">
        <div ref={carsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountOne}</div>
      </div>
      <div className="text-center">
        <div ref={reviewsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountTwo}</div>
      </div>
      <div className="text-center">
        <div ref={visitorsRef} className="text-3xl font-bold"></div>
        <div className="mt-2 text-sm">{CountThree}</div>
      </div>
      <div className="text-center">
        <div ref={storiesRef} className="text-3xl font-bold"></div>{" "}
        <div className="mt-2 text-sm">{CountFour}</div>
      </div>
    </div>
  );
};
export default Count;
