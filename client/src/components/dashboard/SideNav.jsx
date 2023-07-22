import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* eslint-disable react/prop-types */
const SideNav = () => {
  const [toggle, setToggle] = useState(false);
  const [hover, sethover] = useState(false);
  const outlineVariants = {
    default: {
      width: 12,
      x: 0,
      transition: { duration: 0.24, ease: "easeOut" },
    },
    toggle: {
      width: 24,
      transition: { duration: 0.24, ease: "easeOut" },
    },
    hover: {
      width: 12,
      x: 12,
      transition: { duration: 0.24, ease: "easeOut" },
    },
  };
  return (
    <AnimatePresence initial={false}>
      <div
        className={toggle ? "h-screen bg-[#191919]" : "bg-[#202020] h-screen"}>
        <motion.div
          onMouseEnter={() => sethover(true)}
          onMouseLeave={() => sethover(false)}
          animate={{ width: toggle ? 40 : "16rem" }}
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          className="w-[16rem] h-full group">
          <motion.button
            initial="default"
            animate={!toggle ? "default" : toggle && hover ? "hover" : "toggle"}
            onClick={() => setToggle(!toggle)}
            className=" flex flex-col p-4 cursor-pointer">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#bababa"
              xmlns="http://www.w3.org/2000/svg">
              <motion.rect rx={1} width={24} height={2} y={5}></motion.rect>
              <motion.rect
                variants={outlineVariants}
                width={24}
                rx={1}
                height={2}></motion.rect>
              <motion.rect
                rx={1}
                variants={outlineVariants}
                height={2}
                y={10}></motion.rect>
            </motion.svg>
          </motion.button>

          <motion.div
            transition={{ ease: "easeOut", duration: 0.245 }}
            animate={{
              position: toggle ? "absolute" : "reletive",
              y: toggle ? "100%" : 0,
              x: hover && toggle ? 0 : toggle ? -500 : 0,
            }}
            initial={{ position: "relative", y: 0 }}
            className="text-[#bababa] flex justify-start flex-col gap-4 w-[16rem] bg-[#202020]">
            <button className="flex items-center px-2 py-1  gap-2  text-md font-semibold rounded hover:bg-[#2c2c2c]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256">
                  <g fill="#808182" transform="scale(10.66667,10.66667)">
                    <path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path>
                  </g>
                </svg>
              </span>
              Create snippet
            </button>
            <button className="flex items-center px-2 py-1 gap-2  text-md font-semibold rounded hover:bg-[#2c2c2c]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    fill="#808182"
                    d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z"></path>
                </svg>
              </span>
              Create collection
            </button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SideNav;
