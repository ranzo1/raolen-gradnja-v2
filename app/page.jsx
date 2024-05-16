import Hero from "../components/home/Hero";
import Steps from "../components/home/Steps";
import About from "../components/home/About";
import Brands from "@/components/home/Brands";
import Work from "@/components/home/Work";
import Stats from "@/components/home/Stats";
import News from "@/components/home/News";
import Contact from "@/components/home/contact/Contact";
import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/home/Location"), {
  ssr: false,
});

const Map = dynamic(() => import("@/components/home/Map"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <About />
      <Map />
      <Location />
      <News />
      <Brands />
      <Work />
      <Stats />
      <Contact />
    </>
  );
}
