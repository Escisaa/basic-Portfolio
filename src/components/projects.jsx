import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <motion.div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Adding staggered animation
              viewport={{ once: true }} // Animates once as the element comes into view
            >
              <div className="w-full lg:w-1/4">
                <motion.img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }} // Slight hover effect
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="w-full max-w-xl lg:-3/4">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.description}</p>

                {project.technologies.map((tech, index) => {
                  return (
                    <motion.span
                      className="mr-2 rounded-md bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
