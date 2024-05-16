"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";

export default function Footer() {
  return (
    <footer className="footer mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          <Animated
            animation={fadeIn("up", 0.2)}
            className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left"
          >
            {/* logo */}
            <a className="flex justify-center xl:justify-start mb-8" href="">
              <img src="./logo.svg" alt="" />
            </a>
            <p className="mb-8 text-xl">
              Ostanite u kontaktu sa nama i budite u toku, pratite nas i na
              društvenim mrežama.
            </p>
            {/* socials */}
            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a href="">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>
          </Animated>
          <div className="flex flex-1 flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <Animated
              elementType="div"
              animation={fadeIn("up", 0.4)}
              className="footer__item"
            >
              <h3 className="h3 mb-3">Sekcije</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Početna</a>
                </li>
                <li>
                  <a href="">O Nama</a>
                </li>
                <li>
                  <a href="">Lokacija</a>
                </li>
                <li>
                  <a href="">Ponuda</a>
                </li>
                <li>
                  <a href="">Objekti</a>
                </li>
                <li>
                  <a href="">Kontakt</a>
                </li>
              </ul>
            </Animated>
            <Animated
              elementType="div"
              animation={fadeIn("up", 0.6)}
              className="footer__item"
            >
              {/* <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Kitchen</a>
                </li>
                <li>
                  <a href="">Living Area</a>
                </li>
                <li>
                  <a href="">Bathroom</a>
                </li>
                <li>
                  <a href="">Bedroom</a>
                </li>
              </ul> */}
            </Animated>
            <Animated
              elementType="div"
              animation={fadeIn("up", 0.8)}
              className="footer__item max-w-[260px] mx-auto xl:mx-0"
            >
              <h3 className="h3 mb-3">Kontakt</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p>Jug Bogdana 10, Inđija</p>
                <p>contact@raolen-gradnja.com</p>
                <p>064 123 555</p>
              </div>
            </Animated>
          </div>
        </div>
      </div>
      {/* copyright */}
      <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
        Copyright &copy; Raolen Gradnja 2024. All rights reserved
      </p>
    </footer>
  );
}
