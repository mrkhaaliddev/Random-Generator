import Image from "next/image";
import React from "react";
import Illustration from "/public/assets/Illustration2.png";
import { CircleCheckBig } from "lucide-react";

const features = [
  "Discover global fun facts.",
  "Timeless Somali wisdom.",
  "Global wisdom, redefined.",
  "Inspiring, fun stories.",
];

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
  return (
    <div className="md:px-10 mt-20 mb-6 sm:mb-20 mx-auto" id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="h-full w-full p-4">
          <Image
            src={Illustration}
            alt="Our illustration"
            layout="responsive"
            quality={100}
            height={414}
            width={508}
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-semibold leading-relaxed text-black-600">
            {Title}
          </h3>
          <p className="my-4 text-gray-600 dark:text-gray-300">{Description}</p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <CircleCheckBig color="#ef4444" size={18} />
              {Item1}
            </li>
            <li className="flex items-center gap-3">
              <CircleCheckBig color="#ef4444" size={18} />
              {Item2}
            </li>
            <li className="flex items-center gap-3">
              <CircleCheckBig color="#ef4444" size={18} />
              {Item3}
            </li>
            <li className="flex items-center gap-3">
              <CircleCheckBig color="#ef4444" size={18} />
              {Item4}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
