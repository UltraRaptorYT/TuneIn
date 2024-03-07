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

  // State variables
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // Generate video function
  const handleGenerateClick = () => {
    setLoading(true);
    setShowVideo(false);

    setTimeout(() => {
      setLoading(false);
      setShowVideo(true);
    }, 60000); // 60 seconds
  };

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
                  className="flex mx-auto bg-white aspect-[1/1.1] w-full rounded-xl"
                  id="lyric display"
                >
                  <video controls autoPlay muted>
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="w-48 mx-auto">
              <Button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                variant="outline"
              >
                {loading ? "Loading..." : "Generate Lyrics"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
