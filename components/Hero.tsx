"use client";
import React from "react";
import Photo from "./Photo";
import { Button } from "./ui/button";
import { IoMdDownload } from "react-icons/io";
export const Hero = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row gap-10 lg:gap-40 items-center relative my-10 z-10 max-w-screen-xl mx-auto pt-20 ">
      <div className="flex items-center pb-10 justify-center">
        <Photo />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div className="flex justify-center items-center lg:justify-start">
              <p className="inline-block pl-1 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase  rounded-full bg-teal-accent-400">
                Freshly Graduated
              </p>
            </div>
            <h2 className="text-center text-white lg:text-start max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none mx-auto">
              Bringing Ideas to life{""}
              <span className="inline-block text-red-700">
                through code and design.
              </span>
            </h2>
            <p className="text-base text-gray-400 md:text-lg lg:text-justify text-center pb-10">
              Hi, I&apos;m Gabriel Anthony, a Computer Engineering student at
              Don Honorio Ventura State University. I enjoy designing clean,
              responsive, and user-friendly websites. While I focus primarily on
              front-end development, I am continually enhancing my skills in
              this area. Explore my latest projects and progression as I develop
              my abilities.
            </p>
            <a href="/GabrielResume.pdf" download="GabrielAnthony_CV.pdf" className="mt-16">
            <div className="flex justify-center items-center lg:justify-start px-4 lg:px-0">
              <Button variant={"destructive"} className="py-4 px-8 w-full lg:w-auto">
                Download CV
                <IoMdDownload />
              </Button>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
