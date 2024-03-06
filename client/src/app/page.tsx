"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Navbar from "../components/Navbar";

const Page = () => {
  // Decalre variables
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="h-[calc(100dvh-64px)] flex flex-col mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
        <Image
          src="/ornament-left.f9d9dd67_Zwnqs0.webp"
          alt=""
          height={500}
          width={500}
          className="absolute w-60 top-10 sm:top-22 sm:w-64 left-0 -z-10 aspect-auto"
        />
        <div className="h-1/2 flex flex-col md:flex-row mt-12 md:mt-24 max-w-7xl mx-auto gap-x-8 md:justify-around">
          <div className="flex flex-col space-y-5 w-1/2">
            <div className="flex flex-col space-y-3" id="header">
              <div className="font-bold text-5xl">Tune-in:</div>
              <div className="text-5xl" id="elaboration">
                Inspiring Creativity,
              </div>
              <div className="text-5xl">One Lyric at a Time</div>
            </div>
            <div className="text-xl">
              Turn dry topics into unforgettable melodies with Tune-In, a
              revolutionary platform designed to transform the way music is made
            </div>
            <div className="w-40">
              {" "}
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                onClick={() => router.push("/generate")}
              >
                Try it out
              </button>
            </div>
          </div>
          <Image
            src="/Group 9.svg"
            alt="Tune-In"
            height={500}
            width={500}
            className="pt-20 lg:pt-0 lg:max-w-sm xl:max-w-lg"
          />
        </div>
        <Image
          src="/ornament-right.57ba9714_ZeVGXQ.webp"
          alt=""
          height={500}
          width={500}
          className="hidden absolute md:block md:-bottom-20 lg:-bottom-64 xl:-bottom-80 right-0 -z-10 aspect-auto w-2/5"
        />
        <div className="h-1/2" id="filler"></div>
      </div>
    </>
  );
};

export default Page;
