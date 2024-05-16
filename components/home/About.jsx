"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function About() {
  return (
    <section id="about" className="about mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto xl:px-0">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
          {/* text */}
          <Animated
            animation={fadeIn("right", 0.2)}
            className="about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8"
          >
            <h2 className="h2">Naša Vizija</h2>
            <p>
              Naša vizija je jednostavna - stvarati nekretnine koje ispunjavaju
              svačija očekivanja. Uzimamo u obzir vaše potrebe, želje i buduće
              planove kako bismo stvorili prostor koji odražava vašu jedinstvenu
              priču i stil života.
            </p>
            {/* phone */}
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                <i className="ri-phone-fill text-accent text-4xl"></i>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">0987 654 321</div>
                <div>Pozovite nas bilo kad</div>
              </div>
            </div>
            {/* btn */}
            <button className="btn btn-primary">
              Besplatna estimacija
              <i className="ri-arrow-right-line text-accent"></i>
            </button>
          </Animated>
          {/* img */}
          <Animated
            animation={fadeIn("left", 0.2)}
            className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0"
          >
            <img src="./about/img.png" alt="" />
          </Animated>
        </div>
      </div>
    </section>
  );
}
