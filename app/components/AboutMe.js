'use client'
import React from 'react';
import '../globals.css';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen">
      <div className="md:w-1/2 pr-8 flex items-center justify-end"> {/* Adjusted margin to pr-8 */}
        <img
          src="https://lh3.googleusercontent.com/d/1cLAHHYRX_acMoEPZz_4VRCTPRTKPE7DM=s750?authuser=1"
          alt="Hunter Shiells"
          className="rounded-full w-64 h-64 object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">Hunter Shiells</h1>
        <p className="text-lg text-white">
          Dedicated professional with a Bachelor of Science in Computer Science.
          Experienced Developer Team Lead skilled in Servo Motors, Raspberry Pi, and React.
          Proven track record in innovative solutions and project management.
          Eager to bring technical expertise to dynamic projects and contribute to success.
        </p>
        <a
          href="https://drive.google.com/file/d/1OnxNWiMJNnqggGWCGtRWwjvX9rdDFlGE/view?usp=sharing"
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