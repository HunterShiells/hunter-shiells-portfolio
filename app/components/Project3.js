"use client";
import React from "react";

const Project3 = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center h-screen md:ms-[250px]">
      {/* Text on the left */}
      <div className="w-full sm:w-1/3 text-white p-8 text-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-blue-500">
          Shop-Front-Web-App
        </h1>
        <p className="text-base sm:text-sm md:text-base lg:text-lg text-center">
          Developed a dynamic web app using JavaScript, PHP, HTML, and CSS.
          Managed live databases through PHP with XAMPP for robust
          functionality. Utilized React for an intuitive UI with seamless
          navigation via React Routes. Created an innovative smart trip planning
          system tailored for efficient electronic product delivery. The
          platform ensures a seamless shopping experience, allowing real-time
          updates to a hosted database, promoting user satisfaction and
          operational efficiency.
        </p>
        <a
          href="https://github.com/HunterShiells/Shop-Front-Web-App"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
        >
          View Github
        </a>
      </div>

      <div className="w-[150px] h-[150px] md:w-full md:h-auto">
        <img
          src="https://lh3.googleusercontent.com/d/1xdWF5L9PveNWr1d5QE_2NOxqQB1b48cK=s3000?authuser=1"
          alt="WebMoti Box"
          className="object-cover rounded-lg border border-gray-500"
        />
      </div>
    </div>
  );
};

export default Project3;
