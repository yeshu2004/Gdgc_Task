import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const GetStartedBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const blueBackgroundVariants = {
    initial: { scale: 0 },
    hover: { 
      scale: 3,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { x: 0, rotate: -45 },
    hover: { 
      x: "0.2rem",
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const textVariants = {
    initial: { x: 0, color: "#000" },
    hover: { 
      x: "0.2rem",
      color: "#fff",
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='flex items-center gap-2 border-2 rounded-full hover:border-[#224E87] border-zinc-200 px-2 py-1 lg:pr-4 w-fit h-full overflow-hidden relative'
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
    >
      <motion.div 
        className='absolute inset-0 bg-[#224E87] rounded-full'
        variants={blueBackgroundVariants}
      />
      <motion.div 
        className='bg-[#224E87] lg:h-10 h-10 lg:w-10 w-10 flex items-center justify-center rounded-full text-white z-10'
        variants={iconVariants}
      >
        <span className=''><FaArrowRight/></span>
      </motion.div>
      <motion.h1 
        className='lg:text-sm text-xl z-10'
        variants={textVariants}
      >
        Get Started
      </motion.h1>  
    </motion.div>
  );
};

export default GetStartedBtn;