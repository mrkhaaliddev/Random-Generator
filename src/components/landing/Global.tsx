import Image from "next/image";
import React from "react";
import Map from "/public/assets/HugeGlobal.svg";

export default function Global({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  return (
    <div className="py-12 w-full px-8 mt-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
        {Title}
      </h1>
      <p className="leading-normal text-center mx-auto py-3 w-10/12 sm:w-7/12 lg:w-6/12">
        {Description}
      </p>
      <Image
        src={Map}
        alt="Map"
        layout="responsive"
        width={500}
        height={300}
        className="w-full h-auto mt-10"
      />
    </div>
  );
}
