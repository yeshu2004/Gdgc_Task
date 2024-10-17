import { color, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const GetStartedBtn = () => {
  return (
    <motion.div className='flex items-center gap-2 border-2 rounded-full border-zinc-200 px-2 py-1 lg:pr-4 w-fit h-full overflow-hidden'>
      <motion.div className='bg-[#224E87] lg:h-10 h-10 lg:w-10 w-10 flex items-center justify-center rounded-full text-white'>
        <span className='-rotate-45'><FaArrowRight/></span>
      </motion.div>
        <h1 className='lg:text-sm text-xl'>Get Started</h1>  
    </motion.div>
  )
}

export default GetStartedBtn