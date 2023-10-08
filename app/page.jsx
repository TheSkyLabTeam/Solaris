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
    offset: ["start start", "end start"],
  })

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
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <MainNavbar/>
      <motion.div id="header" ref={ref} className="w-full h-[100vh] flex" style={{ y: headerY }}>
        <div className="nasaSpaceApp absolute bottom-0 right-0 bg-white w-24 h-24 flex justify-center place-items-center">
          <img src="/spaceapps.png" className="w-20 h-20" />
        </div>
        <div className="headerTitlesContainer">
          <div id="semiLogoContainer" className='flex place-items-center gap-2'>
            <img src="/SemiLogo.png" alt='Logo Semillero UTB' className='w-12 h-auto'/>
            <h6 className='text-[#D8D9C5] font-normal'>Presents:</h6>
          </div>
            <h1 className='text-[10vw] font-semibold text-[#D8D9C5] h-min -mt-6'>SOLARIS</h1>

          <h5 className='text-[1.5vw] text-center text-[#D8D9C5] font-normal w-[30vw] -mt-10'>The best way to understand the magnetic reconnection of the sun.</h5>
          <div id="startButton" className='bg-[#D8D9C5] mt-10 px-4 py-2 rounded-full text-sm font-medium'><Link href="/dashboard">INICIATE SOLARIS</Link></div>
        </div>
      </motion.div>
      <motion.div className="section w-full h-[90vh] bg-black pt-10 px-10" id="description" style={{ y: sectionY}}>
        <h1 className="text-[#D8D9C5] text-5xl font-semibold">MAGNETIC <br/> RECONECTION?</h1>
        <p className="text-[#9C8F80] mt-10">
          Magnetic reconnection in the context of the Sun refers to the process in which magnetic field lines in the solar atmosphere, 
          especially in the solar corona, change their configuration. This occurs when initially separated magnetic field lines approach 
          and join together. When these lines reconnect, they release a large amount of energy in the form of solar flares and coronal mass ejections (CMEs).

        </p>
        <p className="text-[#9C8F80] mt-10">
          In the Sun, magnetic reconnection is a significant cause of explosive solar events. During reconnection, the stored magnetic energy is converted into thermal 
          and kinetic energy, resulting in solar flares that can affect communications on Earth and satellite navigation systems, among other things. It can also lead t
          o coronal mass ejections, which are massive ejections of solar material into space, and when these CMEs impact Earth, they can disrupt conditions in the Earth's magnetosphere and cause geomagnetic storms.
        </p>
        
        <div id="bannerMR" className="pt-10"></div>
        <p className="text-sm font-thin text-[#D8D9C5]">Credits: Tom Bridgman/NASA’s Scientific Visualization Studio</p>

      </motion.div>
    </main>
  )
}
