"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Steps() {
  const stepsData = [
    {
      icon: "ri-compasses-2-line",
      iconSize: "text-5xl",
      iconColor: "text-accent",
      title: "Inovativnost",
      description:
        "Uzimamo u obzir najnovije trendove u građevinskoj industriji, ali isto tako podstičemo kreativnost kako bismo stvorili jedinstvene i originalne koncepte.",
    },
    {
      icon: "ri-magic-line",
      iconSize: "text-5xl",
      iconColor: "text-accent",
      title: "Dizajn",
      description:
        "Dizajn nije samo stvar estetike, već i funkcionalnosti. Pažljivo osmišljeni prostori spajaju eleganciju i praktičnost.",
    },
    {
      icon: "ri-compasses-2-line",
      iconSize: "text-5xl",
      iconColor: "text-accent",
      title: "Izrada",
      description:
        "Kvalitetna gradnja podrazumeva upotrebu vrhunskih materijala, pažljivo planiranje i izvedbu projekata kako bi se stvorili domovi koji traju.",
    },
  ];

  return (
    <section id="steps" className="steps mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        {/* text */}
        <Animated
          elementType="div"
          animation={fadeIn("down", 0.2)}
          className="text-center mb-24"
        >
          <h2 className="work__title h2 mb-4">Zašto baš mi?</h2>
          <p className="work__subtitle max-w-3xl mx-auto"></p>
        </Animated>
        {/* grid items */}
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {stepsData.map((step, index) => (
            <Animated
              elementType="div"
              animation={fadeIn("up", 0.4 * (index + 1))}
              className="steps__step text-center"
              key={index}
            >
              <div className="mb-4">
                <i
                  className={`${step.icon} ${step.iconSize} ${step.iconColor}`}
                ></i>
              </div>
              <h3 className="h3 mb-5">{step.title}</h3>
              <p className="mb-5 max-w-md mx-auto">{step.description}</p>
              {/* <a href="#" className="font-medium flex justify-center gap-2">
              Read more
              <i className="ri-arrow-right-line text-accent"></i>
            </a> */}
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
