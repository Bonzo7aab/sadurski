"use client"

import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Footer";




const Collapsible = ({ label, children, isOpen, id, handleClick }: { label: string, children: ReactElement, isOpen: boolean, id: number, handleClick: Dispatch<SetStateAction<number | null>> }) => {
    return (
      <div className={`${isOpen ? 'h-full bg-cp4-700' : 'h-auto bg-cp4-300'} text-center border border-black`}>
      <AnimatePresence initial={false}>
        {isOpen 
          ?           <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="h-full"
        >{children}</motion.div>
          : <h2 className="p-4 text-xl font-bold cursor-pointer hover:bg-cp1-700 hover:text-cp1-200" onClick={() => handleClick(id)}>{label}</h2>
        }
        </AnimatePresence>
      </div>
    );
}

const Collapse = () => {
    const [openedId, setOpenedId] = useState<number | null>(1)

    return (
      <>
        <Collapsible
          label="About"
          id={1}
          isOpen={openedId === 1}
          handleClick={setOpenedId}
        >
          <About />
        </Collapsible>

        <Collapsible
          label="Projects"
          id={2}
          isOpen={openedId === 2}
          handleClick={setOpenedId}
        >
          <Projects />
        </Collapsible>

        <Collapsible
          label="Contact"
          id={3}
          isOpen={openedId === 3}
          handleClick={setOpenedId}
        >
          <Contact />
        </Collapsible>
      </>
    );
}

export default Collapse;
