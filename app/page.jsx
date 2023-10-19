"use client"

import { useTransform, useScroll, motion, useInView} from "framer-motion";
import Link from 'next/link'
import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'
import MainNavbar from '@/components/MainNavbar'

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
      duration: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  //Animations
  const headerWidth = useTransform(scrollYProgress, [0, 0.2], ["100vw", "95vw"]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <MainNavbar/>
      <section id="headerContainer" className="w-[100vw] h-[100vh] flex justify-center place-content-baseline mb-24">
        <motion.div id="header" className=" h-[100vh] flex place-items-end px-4 md:px-10 rounded-xl" style={{width: headerWidth}}>
          <div className="headerTitlesContainer z-10">
            <h5 className='relative text-base md:text-[1.5vw] text-[#FFB950] font-normal w-fit md:w-[30vw] md:-mt-10'>The best way to understand the magnetic reconnection of the sun.</h5>
            <h1 className='text-[15vw] md:text-[10vw] font-semibold text-[#FFB950] h-min md:-mt-6'>SOLARIS</h1>
            
          </div>
        </motion.div>
      </section>

      <motion.div className="flex flex-col w-full h-fit md:h-[90vh] bg-black px-8 md:px-16" id="description">
        <h1 className="text-[#D8D9C5] text-3xl md:text-5xl font-semibold">MAGNETIC <br/> RECONECTION?</h1>
        <p className="text-[#9C8F80] mt-10">
          Magnetic reconnection in the context of the Sun refers to the process in which magnetic field lines in the solar atmosphere, 
          especially in the solar corona, change their configuration. This occurs when initially separated magnetic field lines approach 
          and join together. When these lines reconnect, they release a large amount of energy in the form of solar flares and coronal mass ejections (CMEs).

        </p>
        <p className="text-[#9C8F80] mt-10 mb-8">
          In the Sun, magnetic reconnection is a significant cause of explosive solar events. During reconnection, the stored magnetic energy is converted into thermal 
          and kinetic energy, resulting in solar flares that can affect communications on Earth and satellite navigation systems, among other things. It can also lead t
          o coronal mass ejections, which are massive ejections of solar material into space, and when these CMEs impact Earth, they can disrupt conditions in the Earth&apos;s magnetosphere and cause geomagnetic storms.
        </p>
        
        <div id="bannerMR" className="mt-4"></div>
        <p className="text-sm font-thin text-[#D8D9C5]">Credits: Tom Bridgman/NASA’s Scientific Visualization Studio</p>

      </motion.div>
    </main>
  )
}