"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Stats() {
  const statsData = [
    {
      value: "75",
      label: "Stanova",
    },
    {
      value: "45",
      label: "Parking mesta",
    },
    {
      value: "5000",
      label: "Kvadrata",
    },
    {
      value: "∞",
      label: "Mogućnosti",
    },
  ];

  return (
    <section
      id="stats"
      className="stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]"
    >
      <div className="container mx-auto">
        {/* grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          {statsData.map((item, index) => (
            <Animated
              key={index}
              elementType="div"
              animation={fadeIn("up", 0.2 * (index + 1))}
              className="stats__item text-center xl:border-r xl:border-accent"
            >
              <h3 className="h1 font-primary text-accent">{item.value}</h3>
              <p>{item.label}</p>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
