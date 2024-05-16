"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Work() {
  const workData = [
    {
      imgSrc: "./work/01.png",
      title: "Mali stanovi",
      description: "Garsonjere/35m2",
    },
    {
      imgSrc: "./work/02.png",
      title: "Srednji stanovi",
      description: "1-2 sobe/50m2",
    },
    {
      imgSrc: "./work/04.png",
      title: "Veliki stanovi",
      description: "3-4 sobe/90m2",
    },
    {
      imgSrc: "./work/03.png",
      title: "Poslovni prostor",
      description: "3 prostorije/100m2",
    },
  ];
  return (
    <section id="work" className="work mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0">
        {/* text */}
        <div className="text-center mb-24">
          <Animated
            elementType="h2"
            animation={fadeIn("up", 0.2)}
            className="work__title h2 mb-4"
          >
            Naša Ponuda
          </Animated>
          <Animated
            elementType="p"
            animation={fadeIn("up", 0.4)}
            className="work__subtitle max-w-3xl mx-auto"
          >
            Raolen Gradnja nudi širok spektar nekretnina, uključujući u ponudu
            domove za studente, porodice kao i poslovne prostore.
          </Animated>
        </div>
        {/* grid */}
        <Animated
          animation={fadeIn("up", 0.6)}
          className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]"
        >
          {workData.map((item, index) => (
            <div key={index} className="w-full max-w-[548px] h-full mx-auto">
              <img className="mb-6" src={item.imgSrc} alt="" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="h3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                  <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                </button>
              </div>
            </div>
          ))}
        </Animated>
      </div>
    </section>
  );
}
