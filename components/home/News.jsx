"use client";

import Animated from "@/animation/Animated";
import { fadeIn } from "@/animation/variants";
import Image from "next/image";

export default function News() {
  const newsData = [
    {
      imgSrc: "/news/01.png",
      title: "Kafić",
      date: "Mesto za opuštanje, rad od kuće ili neformalna druženja, gde se susreću komšije, prijatelji i porodice.",
    },
    {
      imgSrc: "/news/03.jpg",
      title: "Igraonica za decu",
      date: "Igraonica za decu je prostor dizajniran tako da pruži zabavno i sigurno okruženje za igru, učenje i socijalizaciju dece različitih uzrasta.",
    },
    {
      imgSrc: "/news/02.png",
      title: "Market",
      date: "Market u sklopu zgrade je praktična destinacija za sve potrebne kupovine na dohvat ruke, što čini život stanara lakšim i praktičnijim.",
    },
  ];

  return (
    <section id="news" className="news mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto px-0">
        {/* text */}
        <Animated
          elementType="div"
          animation={fadeIn("up", 0.2)}
          className="max-w-[810px] mx-auto text-center mb-[52px]"
        >
          <h2 className="news__title h2 mb-3">Objekti</h2>
          <p className="news__subtitle">
            U našim objektima pronaći ćete više od samo stambenog prostora.
            Nudimo dodatne pogodnosti koje čine život naših stanara
            jednostavnijim i ugodnijim.
          </p>
        </Animated>
        {/* grid */}
        <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          {newsData.map((item, index) => (
            <Animated
              animation={fadeIn("up", 0.2 * (index + 1))}
              key={index}
              className="news__item w-full max-w-[382px] h-[720px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
            >
              <Image
                src={item.imgSrc}
                width={500}
                height={500}
                alt=""
                className="mb-5 rounded-t-md"
              />
              {/* <img className="mb-5" src={item.imgSrc} alt="" /> */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="h3">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-base">{item.date}</p>
                  {/* <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                    <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                  </button> */}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
