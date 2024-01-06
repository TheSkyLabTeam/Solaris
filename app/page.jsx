"use client";

import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import MainNavbar from "@/components/MainNavbar";
import Header from "@/components/Header";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 2
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
      <Header />
      <motion.div
        className="flex flex-col w-full h-fit md:h-[90vh] bg-black px-8 md:px-16"
        id="description"
      >
        <h1 className="text-[#D8D9C5] text-3xl md:text-5xl font-semibold">
          MAGNETIC <br /> RECONECTION?
        </h1>
        <p className="text-[#9C8F80] mt-10">
          Magnetic reconnection in the context of the Sun refers to the process
          in which magnetic field lines in the solar atmosphere, especially in
          the solar corona, change their configuration. This occurs when
          initially separated magnetic field lines approach and join together.
          When these lines reconnect, they release a large amount of energy in
          the form of solar flares and coronal mass ejections (CMEs).
        </p>
        <p className="text-[#9C8F80] mt-10 mb-8">
          In the Sun, magnetic reconnection is a significant cause of explosive
          solar events. During reconnection, the stored magnetic energy is
          converted into thermal and kinetic energy, resulting in solar flares
          that can affect communications on Earth and satellite navigation
          systems, among other things. It can also lead t o coronal mass
          ejections, which are massive ejections of solar material into space,
          and when these CMEs impact Earth, they can disrupt conditions in the
          Earth&apos;s magnetosphere and cause geomagnetic storms.
        </p>

        <div id="bannerMR" className="mt-4"></div>
        <p className="text-sm font-thin text-[#D8D9C5]">
          Credits: Tom Bridgman/NASA’s Scientific Visualization Studio
        </p>
      </motion.div>
    </main>
  );
}
