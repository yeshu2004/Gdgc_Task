import { FaArrowRight } from "react-icons/fa6";
import { GiPolarStar } from "react-icons/gi";
import { motion } from "framer-motion";
import img2 from '../assets/img2.avif'

const HeroRight = () => {
  return (
    <div className="h-[80vh] lg:h-full flex flex-col gap-10">
      <div className="h-[60vh] w-full rounded-3xl overflow-hidden relative">
          <motion.img initial={{scale: 1.3}} whileInView={{scale: 1}} transition={{duration: 1.2, ease: "easeInOut", delay: 0.2}} viewport={{once: true}} src={img2} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute top-5 right-5">
            <div className="flex items-center gap-2 border-2 rounded-full px-3 py-1 text-white">
              <motion.span 
                className="text-[#F63B34] text-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <GiPolarStar />
              </motion.span>
              <h2 className="text-lg">Control in one platform</h2>
            </div>
          </div>
          <motion.div initial={{y: 0}} whileInView={{y: "-100%"}} transition={{duration: 1.2, ease: "easeInOut"}} viewport={{once: true}} className="absolute inset-0 bg-zinc-100"></motion.div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="bg-[#224E87] h-24 w-24 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl -rotate-45"><FaArrowRight/></span>
        </div> 
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl lg:tracking-tight leading-none text-[#F63B34]">Instan card control</h1>  
          <p className="lg:text-sm text-zinc-700">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Eaque necessi tatibus iusto, nesciunt repudiandae maxime</p>
        </div> 
      </div>
    </div>
  )
}

export default HeroRight