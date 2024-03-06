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
      <div className="h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-1/2 flex flex-col justify-center mt-24">
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
          <div className="w-1/2">
            {/* <Image
              src="/Group 9.svg"
              alt="Tune-In"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            /> */}
          </div>
        </div>
        <div className="h-1/2" id="filler"></div>
      </div>
    </>
  );
};

export default Page;
