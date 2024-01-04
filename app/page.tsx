"use client"

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Step from "./components/Step";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Secc = ({ id }: { id: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 600);

  return (
    <section className="flex flex-col justify-center h-screen">
      <div ref={ref} className="flex self-center justify-center w-64 overflow-hidden text-2xl border-4 border-green-300 h-[60vh]">
        strona {id}
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Step />
      <Contact />
      {/* {[1, 2, 3, 4].map((el) => <Secc key={el} id={el} />)} */}
    </main>
  )
}
