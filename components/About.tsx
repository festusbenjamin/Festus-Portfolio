import React from "react";
import { motion } from "framer-motion";
import { AboutInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  aboutInfo: AboutInfo;
};

export default function About({ aboutInfo }: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase text-gray-500 text-2xl tracking-[20px]">
        About{" "}
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(aboutInfo?.profilePicture).url()}
        alt="My Photo"
        className="-mb-20 md:mb-0 flex-shrink-0 w-[210px] h-[210px] rounded-full object-cover md:rounded-lg md:w-[240px] md:h-[345px] xl:w-[250px] xl:h-[350px]"
      />

      <div className="space-y-3 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          {aboutInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
