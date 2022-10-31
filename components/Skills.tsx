import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skillsfolder from "./Skillsfolder";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase text-gray-500 text-2xl tracking-[20px]">
        Skills{" "}
      </h3>

      <h3 className="absolute top-36 xl:top-28 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skillsfolder key={skill._id} skill={skill} directionLeft />
        ))}

        {skills.slice(skills.length /2, skills.length).map((skill) => (
          <Skillsfolder key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
