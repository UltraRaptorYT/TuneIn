"use client";

import React, { useState, useRef } from "react";

// Importing components
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";

// Importing ui components
import { Button } from "../../components/ui/button";

const Page = () => {
  // Dropdown options
  const songGenres = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "hip_hop", label: "Hip-Hop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classical" },
    { value: "blues", label: "Blues" },
    { value: "country", label: "Country" },
    { value: "reggae", label: "Reggae" },
    { value: "electronic", label: "Electronic" },
    { value: "folk", label: "Folk" },
    { value: "r_b", label: "R&B" },
    { value: "metal", label: "Metal" },
    { value: "indie", label: "Indie" },
  ];

  const songTopics = [
    { value: "love", label: "Love" },
    { value: "adventure", label: "Adventure" },
    { value: "friendship", label: "Friendship" },
    { value: "nature", label: "Nature" },
    { value: "heartbreak", label: "Heartbreak" },
    { value: "hope", label: "Hope" },
    { value: "dreams", label: "Dreams" },
    { value: "travel", label: "Travel" },
    { value: "reflection", label: "Reflection" },
    { value: "imagination", label: "Imagination" },
    { value: "loss", label: "Loss" },
    { value: "inspiration", label: "Inspiration" },
    { value: "desire", label: "Desire" },
    { value: "freedom", label: "Freedom" },
    { value: "peace", label: "Peace" },
    { value: "challenge", label: "Challenge" },
    // Add more topics as needed
  ];
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
            <div className="flex">
              <div className="p-10 w-1/2" id="content">
                <div className="font-semibold text-xl" id="title-header">
                  Customise Your Lyrics
                </div>
                <div className="flex flex-col space-y-10 mt-10">
                  <div className="flex flex-col">
                    <label className="text-md mb-1">Song Genre</label>
                    <Dropdown
                      dropdownOptions={songGenres}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-md mb-1">Song Topic</label>
                    <Dropdown
                      dropdownOptions={songTopics}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-md mb-1">Instruments</label>
                    <Dropdown
                      dropdownOptions={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-md mb-1">Cultural References</label>
                    <Dropdown
                      dropdownOptions={frameworks}
                      modalOpenStatus={open}
                      selectedValue={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-md mb-1">Other Topic Prompts</label>
                    <Dropdown
                      dropdownOptions={frameworks}
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
            <div className="w-48 mx-auto">
              <Button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                variant="outline"
              >
                Generate Lyrics
              </Button>
            </div>
            {loading && (
              <div role="status">
                <svg
                  className="w-8 h-8 text-gray-200 animate-spin fill-blue-600 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            {showVideo && (
              <div className="aspect-video w-full">
                <video controls autoPlay muted>
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
