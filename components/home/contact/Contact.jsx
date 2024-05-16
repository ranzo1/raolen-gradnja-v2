"use client";

import { fadeIn } from "@/animation/variants";
import Animated from "@/animation/Animated";
import ContactForm from "./form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact mt-[80px] xl:mt-[150px] relative z-20"
    >
      <Animated
        elementType="div"
        animation={fadeIn("up", 0.2)}
        className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[80px]"
      >
        <Animated
          elementType="div"
          animation={fadeIn("up", 0.4)}
          className="contact__text max-w-[640px] mx-auto text-center"
        >
          <h2 className="h2 text-white mb-4">
            Zainteresovani ste za našu ponudu?
          </h2>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            Pošaljite nam poruku, a mi ćemo vam odgovoriti u najkraćem mogućem
            roku.
          </p>
          <ContactForm />
        </Animated>
      </Animated>
    </section>
  );
}
