"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Brands() {
  const imgSrcArray = [
    "./brands/01.svg",
    "./brands/02.svg",
    "./brands/03.svg",
    "./brands/04.svg",
    "./brands/05.svg",
  ];
  return (
    <section
      id="brands"
      className="brands mt-[80px] xl:mt-[150px] relative z-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
          {imgSrcArray.map((src, index) => (
            <Animated
              elementType="img"
              animation={fadeIn("up", 0.2 * (index + 1))}
              className="brands__img"
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
