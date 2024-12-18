"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Button } from "./ui/moving-border";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    src: "https://www.facebook.com/GabrielAnthonyManlutac",
    img: "/facebook.svg",
  },
  {
    id: 2,
    name: "Email",
    src: "mailto:gabrielanthonymanlutac@gmail.com",
    img: "/mail.svg",
  },
];
export function Contacts() {
  return (
    <div id="contacts" className="py-10 relative">
      <BackgroundBeamsWithCollision className="py-12">
        <h2 className="text-2xl relative z-10 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Looking for a web tech partner?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 px-2 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Let&apos;s code!</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 px-2">
              <span className="">Let&apos;s code!</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center h-[20rem]">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="mailto:gabrielanthonymanlutac@gmail.com" className="z-50 ">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-neutral-200"
              duration={3000}
            >
              Reach out to me
            </Button>
          </a>
        </div>
        <div className="flex mt-8 md:flex-row flex-col justify-between items-center gap-10">
          <p className="md:text-base text-sm md:font-normal font-light text-white">
            Copyright © 2024 Gabriel Anthony S. Manlutac
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((smedia) => (
              <div
                key={smedia.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-full border border-black-300"
              >
                <Link href={smedia.src} target="_blank">
                  <Image
                    src={smedia.img}
                    alt={smedia.name}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
