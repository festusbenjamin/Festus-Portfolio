import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from 'next/link'
import { HeroInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  heroInfo: HeroInfo
};

export default function Hero({ heroInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${heroInfo?.name}`,
      `${heroInfo?.captionone}`,
      `${heroInfo?.captiontwo}`,
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(heroInfo?.heroImage).url()}
        alt="My Image"
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">
          {heroInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
            <Link href="#about">
            <button className="hero-button">About</button>
            </Link>
    
            <Link href="#experience">
            <button className="hero-button">Experience</button>
            </Link>

            <Link href="#skills">
            <button className="hero-button">Skills</button>
            </Link>

            <Link href="#projects">
            <button className="hero-button">Projects</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
