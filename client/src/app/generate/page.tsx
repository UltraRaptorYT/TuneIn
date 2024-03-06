"use client";

import React, { useState, useRef } from "react";

// Importing components
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";

// Importing ui components
import { Button } from "../../components/ui/button";

const Page = () => {
  // Hard coded data for now later will be fetched from the backend
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-screen flex flex-col justify-start items-center mt-14 space-y-5">
          <div className="text-4xl font-bold" id="title">
            Lyric Generation
          </div>
          <div
            className="flex flex-col aspect-video w-full bg-[#D9D9D9] rounded-xl"
            id="container"
          >
            <div className='flex'>
              <div className="p-10 w-1/2" id="content">
                <div className="font-semibold text-xl" id="title-header">
                  Customise Your Lyrics
                </div>
                <div className="flex flex-col space-y-10 mt-10">
                  <div className="flex flex-col">
                    <label>Song Genre</label>
                    <Dropdown
                      frameworks={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Song Topic</label>
                    <Dropdown
                      frameworks={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Instruments</label>
                    <Dropdown
                      frameworks={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Cultural References</label>
                    <Dropdown
                      frameworks={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Other Topic Prompts</label>
                    <Dropdown
                      frameworks={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                </div>
              </div>
              <div className="p-10 w-1/2">
                <div
                  className="bg-white aspect-[1/1.1] w-full rounded-xl"
                  id="lyric display"
                ></div>
              </div>
            </div>
            <div className='w-48 mx-auto'>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
