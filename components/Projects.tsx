import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase text-gray-500 text-2xl tracking-[20px]">
        Projects{" "}
      </h3>

      <div className="relative w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              key={project._id}
              src={urlFor(project.image).url()}
              alt=""
              className="w-80 h-80"
            />
            <div>
              <h4 className="text-4xl font-semibold text-center">
                Project {i + 1} of {projects.length}:{" "}
                <span className="underline decoration-[#F7AB0A]/50">
                  {project.title}
                </span>
              </h4>

              <div className="flex space-x-8 my-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-8 w-8 rounded-full object-cover"
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[40%] md:top-[35%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}
