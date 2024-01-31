'use client'
import React from "react";

const Project2 = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row h-screen">
      <div className="w-full sm:w-1/2">
        <img
          src="https://lh3.googleusercontent.com/d/1VnotcrYltKsY17UaVqOKF8Ubd1aaVF68=s1000?authuser=1"
          alt="WebMoti Box"
          className="w-3/4 h-auto object-cover rounded-lg border border-gray-500 mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/3 text-white text-center p-8">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-blue-500">
          UniHiker-Spotify-Controls
        </h1>
        <p className="text-base sm:text-sm md:text-base lg:text-lg text-center">
          I crafted an advanced Spotify control system in Python, weaving
          together an array of libraries and imports. The heart of the project
          is a Unihiker ESP32 touchscreen device, delivering an intuitive
          interface for effortless Spotify playback control. By tapping into
          Spotify&apos;s Developer API and harnessing the power of Unihiker&apos;s Python
          library, I&apos;ve created a seamless user experience, making managing
          music playback a breeze.
        </p>
        <a
          href="https://github.com/HunterShiells/Unihiker-Spotify-Controls"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
        >
          View Github
        </a>
      </div>
    </div>
  );
};

export default Project2;
