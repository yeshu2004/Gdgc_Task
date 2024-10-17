// import React from 'react';

import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import img3 from '../assets/img3.avif'

const Page2Left = () => {
  return (
    <div className="h-[65vh] lg:w-[45vw] w-full bg-white rounded-3xl p-10 relative overflow-hidden">
      <div className="flex flex-col gap-6 absolute top-10 left-10 z-10">
        <div className="uppercase leading-[1.1] lg:text-[2.4rem] text-[2.2rem] text-gray-900">
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h1 initial={{y: "100%"}} whileInView={{y: 0}} transition={{duration: 1, ease: "easeInOut"}} viewport={{once: true}}>Online Banking</motion.h1>
          </div>
          <span className="lg:text-3xl text-2xl -rotate-45 text-zinc-600 absolute top-0 right-10 hidden lg:block">
            <FaArrowRight />
          </span>
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h2 initial={{y: "100%"}} whileInView={{y: 0}} transition={{duration: 1, ease: "easeInOut"}} viewport={{once: true}}>That Takes Your</motion.h2>    
          </div>
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h2 initial={{y: "100%"}} whileInView={{y: 0}} transition={{duration: 1, ease: "easeInOut"}} viewport={{once: true}}>Business to the</motion.h2>
          </div>
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h2 initial={{y: "100%"}} whileInView={{y: 0}} transition={{duration: 1, ease: "easeInOut"}} viewport={{once: true}} className="text-[#F63B34]">Next Level</motion.h2>
          </div>
        </div>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, ease: "easeInOut", delay: 0.4}} viewport={{once: true}} className="lg:w-[40%] text-zinc-700 hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
          nemo aliquam quas excepturi harum.
        </motion.p>
      </div>
      <div className="absolute h-[40vh] lg:w-[17vw] w-[80vw] bg-red-400 bottom-14 lg:right-10 right-1/2 transform lg:translate-x-0 translate-x-1/2 rounded-3xl overflow-hidden">
        <motion.img
          initial={{scale: 1.2}}
          whileInView={{scale: 1}}
          transition={{duration: 1.2, ease: "easeInOut", delay: 0.2}}
          viewport={{once: true}}
          src={img3}
          alt="Illustration of online banking services"
          className="h-full w-full object-cover object-center"
        />
        <motion.div initial={{y: 0}} whileInView={{y: "-100%"}} transition={{duration: 1.2, ease: "easeInOut"}} viewport={{once: true}} className="absolute inset-0 bg-white"></motion.div>
      </div>
    </div>
  );
};

export default Page2Left;
