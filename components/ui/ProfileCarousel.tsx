"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/others/profile2.jpg",
  "/others/profile3.jpg",
  "/others/profile4.jpg",
  "/others/profile5.jpg",
];

export default function ProfileCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  return (
    <div className="relative w-[260px] h-[320px] flex items-center justify-center">

      <div className="absolute w-[300px] h-[340px] bg-gradient-to-r 
      from-indigo-500 to-purple-500 blur-3xl opacity-20"></div>

      <div className="relative flex items-center justify-center">

        <div className="absolute left-[-80px] w-[180px] h-[260px] 
        scale-90 opacity-40 blur-[2px] rounded-xl overflow-hidden transition-all duration-500">
          <Image
            src={images[prevIndex]}
            alt="prev"
            fill
            sizes="180px"
            loading="eager"
            className="object-cover"
          />
        </div>

        <div
          onClick={next}
          className="relative z-10 w-[260px] h-[320px] cursor-pointer 
          rounded-xl overflow-hidden border border-white/10
          shadow-2xl shadow-black/40
          hover:scale-105 transition duration-300"
        >
          <Image
            src={images[index]}
            alt="current"
            fill
            sizes="260px"
            loading="eager"
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute right-[-80px] w-[180px] h-[260px] 
        scale-90 opacity-40 blur-[2px] rounded-xl overflow-hidden transition-all duration-500">
          <Image
            src={images[nextIndex]}
            alt="next"
            fill
            sizes="180px"
            loading="eager"
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}