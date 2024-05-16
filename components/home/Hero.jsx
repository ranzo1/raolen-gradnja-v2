"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Hero() {
  return (
    <section
      id="#hero"
      className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
    >
      <Animated
        className="container mx-auto h-full flex items-center justify-center xl:justify-start"
        elementType="div"
        animation={fadeIn("down", 0.2)}
      >
        {/*  text  */}
        <div className="hero__text w-[580px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="h1 mb-8">
            Dobrodošli u <br /> Raolen Gradnju
          </h1>
          <p className="mb-8">Gradimo vašu budućnost zajedno!</p>
          {/* <button className="btn btn-primary mx-auto">
            Get free estimation<i className="ri-arrow-right-line"></i>
          </button> */}
        </div>
      </Animated>
    </section>
  );
}
