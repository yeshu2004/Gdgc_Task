import GetStartedBtn from "./GetStartedBtn";
import { motion } from "framer-motion";
import img1 from "../assets/img1.avif";

const HeroLeft = () => {
  return (
    <div className="h-[90vh] lg:h-full w-full relative">
      <div className="absolute z-10 flex flex-col lg:gap-32 gap-28">
        <div className="lg:text-[3.7rem] text-[3.5rem] lg:leading-[1.1] leading-none lg:text-left uppercase">
          <div className="h-fit rounded-lg w-fit overflow-hidden pt-5 lg:pt-0">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              All your business
            </motion.h1>
          </div>
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              banking in one
            </motion.h1>
          </div>
          <div className="h-fit rounded-lg w-fit overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              platform
            </motion.h1>
          </div>
        </div>
        <div className="lg:w-[36%] w-full">
          <div className="flex flex-col gap-14">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="text-zinc-700 text-base"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, deserunt quasi non mollitia minima impedit voluptates
              reiciendis id totam numquam omnis! Sint repudiandae similique
              minima daino.
            </motion.h1>
            <GetStartedBtn />
            <h1 className="text-base">
              Already started?{" "}
              <span className="text-[#F63B34]">
                Finish your application now
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="z-0 absolute h-[80vh] w-[55%] top-0 right-0 lg:block hidden overflow-hidden rounded-xl">
        <motion.img
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          src={img1}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-zinc-100"
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroLeft;
