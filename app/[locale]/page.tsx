
import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Step from "../components/Step";
import Contact from "../components/Footer";
import Projects from "../components/Projects";
import { TextMarquee } from "../utils/TextMarquee";
import About from "../components/About";
import Collapse from "../components/Collapsible";
import Test from "../components/test";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// const Secc = ({ id }: { id: number }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 600);

//   return (
//     <section className="flex flex-col justify-center h-screen">
//       <div ref={ref} className="flex self-center justify-center w-64 overflow-hidden text-2xl border-4 border-green-300 h-[60vh]">
//         strona {id}
//         <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//       </div>
//     </section>
//   )
// }

// export default function Home() {
//   const { scrollY } = useScroll();
//   const x1 = useTransform(scrollY, [0, 800], [100, 300]);
//   const y2 = useTransform(scrollY, [0, 1], [0, -100]);

//   return (
//     <main className="flex flex-col">
//       <Hero />
//       <Projects />
//       <About />
//     </main>
//   )
// }

import LocaleSwitcher from '../components/locale-switcher'
 
export default function Page() {
  return (
    <div>
      {/* <LocaleSwitcher /> */}
      <main className="flex flex-col">
       <Hero />
       <Projects />
       <About />
     </main>
      {/* <button>{t('title')}</button> */}
    </div>
  )
}
