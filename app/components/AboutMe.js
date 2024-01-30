'use client'
import React from 'react';
import "../globals.css";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img
          src="https://imgur.com/qpW4hZu.png" 
          alt="Hunter Shiells"
          className="rounded-full w-64 h-64 object-cover mx-auto"
        />
      </div>

      <div className="w-1/2 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">Hunter Shiells</h1>
        <p className="text-lg text-white">
        Dedicated professional with a Bachelor of Science in Computer Science. 
        Experienced Developer Team Lead skilled in Servo Motors, Raspberry Pi, and React. 
        Proven track record in innovative solutions and project management. 
        Eager to bring technical expertise to dynamic projects and contribute to success.
        </p>
        <a
            href="http://webmoti.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
          >
            Download My CV!
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
