"use client";

import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import MainNavbar from "@/components/MainNavbar";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <MainNavbar />
      <section
        id="headerContainer"
        className="w-[100vw] h-[100svh] flex justify-center place-content-baseline mb-24"
      >
        <div
          id="header"
          className="w-full h-[100vh] flex place-items-end px-4 md:px-10 rounded-xl"
        >
          <div className="headerTitlesContainer z-10">
            <h5 className="relative text-base md:text-[1.6vw] text-[#FFB950] font-normal w-fit md:w-[30vw] md:-mt-10">
              The best way to understand the magnetic reconnection of the sun.
            </h5>
            <h1 className="text-[15vw] md:text-[12vw] font-semibold text-[#FFB950] h-min md:-mt-6">
              SOLARIS
            </h1>
          </div>
        </div>
      </section>
      <motion.div
        className="flex flex-col w-full h-fit md:h-[90vh] bg-background px-8 md:px-16"
        id="description"
      >
        <h1 className="text-[#D8D9C5] text-3xl md:text-5xl font-semibold">
          MAGNETIC <br /> RECONECTION?
        </h1>
        <p className="text-[#9C8F80] mt-10">
          Magnetic Reconection is a product of several factor in the heliosphere
          but, it occur mainly due changes in the configuration of magnetic
          field lines in the interplanetary medium from solar flares and coronal
          mass ejections, for example, releasing energy in the medium.
        </p>
        <p className="text-[#9C8F80] mt-10 mb-8">
          Explosive solar events in the Sun impact significantly this
          reconection, converting magnetic energy into thermal and kinetic
          energy. This results in solar flares affecting Earth&apos;s communications
          and satellite navigation systems, and CMEs causing geomagnetic storms.
        </p>

        <div id="bannerMR" className="mt-4" />
        <p className="text-sm font-thin text-[#D8D9C5]">
          Credits: Tom Bridgman/NASA’s Scientific Visualization Studio
        </p>
      </motion.div>
    </main>
  );
}
