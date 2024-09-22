import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>

      <div>
        {EXPERIENCES.map((expre, index) => {
          return (
            <motion.div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Smooth staggered animation
              viewport={{ once: true }} // Only animate once when in view
            >
              <div className="w-full lg:w-1/4">
                <motion.p
                  className="mb-2 text-sm text-stone-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }} // Subtle delay for each year
                >
                  {expre.year}
                </motion.p>
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h3
                  className="mb-2 font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.25 }} // Slightly longer delay for each role
                >
                  {expre.role}{" "}
                  <span className="text-sm text-stone-500">
                    {expre.company}
                  </span>
                </motion.h3>

                <motion.p
                  className="mb-4 text-stone-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Longer delay for descriptions
                >
                  {expre.description}
                </motion.p>

                <div>
                  {expre.technologies.map((tech, techIndex) => {
                    return (
                      <motion.span
                        className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                        key={techIndex}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.1 }} // Animate tech badges with slight scale and delay
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
