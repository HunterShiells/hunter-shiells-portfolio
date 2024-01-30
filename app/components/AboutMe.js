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

      <div className="w-1/2 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Hunter Shiells</h1>
        <p className="text-lg">
        Dedicated professional with a Bachelor of Science in Computer Science. 
        Experienced Developer Team Lead skilled in Servo Motors, Raspberry Pi, and React. 
        Proven track record in innovative solutions and project management. 
        Eager to bring technical expertise to dynamic projects and contribute to success.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
