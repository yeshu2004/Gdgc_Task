import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { GiPolarStar } from "react-icons/gi"

const arr = [
  {
    id: 1,
    title: "Access your card at any time",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laudantium neque autem, similique quos ullam quaerat. Nobis ratione necessitatibus nemo."
  },
  {
    id: 2,
    title: "Make your money work for you",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laudantium neque autem, similique quos ullam quaerat. Nobis ratione necessitatibus nemo."
  },{
    id: 3,
    title: "Pay and get paid your way",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laudantium neque autem, similique quos ullam quaerat. Nobis ratione necessitatibus nemo."
  },
  {
    id: 4,
    title: "Free from hidden fees",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos laudantium neque autem, similique quos ullam quaerat. Nobis ratione necessitatibus nemo."
  }
]


const Page2Right = () => {

  const [activeId, setActiveId] = useState(null)

  const toggleDescription = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="h-[70vh] lg:h-[65vh] lg:w-[65vw] w-full bg-zinc-100 rounded-3xl relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="bg-white px-4 py-2 lg:pt-6 pt-4 w-fit rounded-t-3xl lg:px-8">
            <h1 className="bg-[#F63B34] px-4 py-2 text-white w-fit rounded-full uppercase text-2xl">Benefits</h1>
          </div>
          <div className="md:flex items-center gap-5 hidden ">
            <h1 className="bg-zinc-300 text-  black px-3 py-1 w-fit rounded-full text-lg flex items-center gap-2"><span><GiPolarStar/></span> Invoice</h1>
            <h1 className="bg-zinc-300 text-black px-3 py-1 w-fit rounded-full text-lg flex items-center gap-2"><span><GiPolarStar/></span> integration</h1>
            <h1 className="bg-zinc-300 text-black px-3 py-1 w-fit rounded-full text-lg flex items-center gap-2"><span><GiPolarStar/></span> Partner</h1>
            <h1 className="bg-zinc-300 text-black px-3 py-1 w-fit rounded-full text-lg flex items-center gap-2"><span><GiPolarStar/></span> Nova Boost</h1>

          </div>
        </div>
        <div className="h-full w-full bg-white lg:px-10 px-5 py-5 rounded-r-3xl">
          {
            arr.map((elem) => {
              return(
                <div key={elem.id} className="cursor-pointer" onClick={() => toggleDescription(elem.id)}>
                  <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, ease: "easeInOut", delay: 0.1*elem.id}} viewport={{once: true}} className="flex items-center justify-between border-b">
                    <h1 className={`lg:text-4xl text-3xl py-5 ${activeId === elem.id ? 'text-[#F63B34]' : 'text-black'}`}>{elem.title}</h1>
                    <motion.span 
                      animate={{ rotate: activeId === elem.id ? 45 : -45 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="text-zinc-600 lg:text-xl"
                    >
                      <FaArrowRight/>
                    </motion.span>
                  </motion.div>
                  <AnimatePresence>
                    {activeId === elem.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="py-3 lg:py-3">
                          <p>{elem.des}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Page2Right