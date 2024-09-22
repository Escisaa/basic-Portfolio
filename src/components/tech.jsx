import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => {
  inital: {
    y: -10;
  }
  animate: {
    y: [10, -10];
    transition: {
      duration: duration;
      ease: "linear";
      repeat: Infinity;
      repeatType: "reverse";
    }
  }
};

export default function Tech() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        TechStack
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <RiReactjsLine className="text-7xl text-cyan-400" />

        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>

        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>

        <div className="p-4">
          <SiJavascript className="text-7xl text-yellow-300 text-center" />
        </div>

        <div className="p-4">
          <SiNodedotjs className="text-7xl text-green-500 text-center" />
        </div>

        <div className="p-4">
          <SiTailwindcss className="text-7xl text-blue-500 text-center" />
        </div>
      </motion.div>
    </div>
  );
}
