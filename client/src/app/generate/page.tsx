"use client";

import React from "react";

import Navbar from "../../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="h-screen flex flex-col justify-start items-center mt-14 space-y-5">
          <div className="text-4xl font-bold" id="title">
            Lyric Generation
          </div>
          <div className="aspect-video w-full bg-[#D9D9D9] rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
