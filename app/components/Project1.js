"use client";
import React from "react";
import "../globals.css";

const Project1 = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row h-screen">
      <div className="w-full sm:w-1/3 text-white p-8 text-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-blue-500">
          WebMoti
        </h1>
        <p className="text-base sm:text-sm md:text-base lg:text-lg text-center">
          Created an inclusive classroom assistant for neurodivergent students,
          featuring a servo-controlled hand for raising questions and receiving
          feedback. Implemented a pan and tilt microphone system via Raspberry
          Pi, enhancing the online student&apos;s engagement. Utilized Twilio Video
          for a custom interface, providing full control over the raise hand
          function and classroom cameras. Integrated hardware components,
          including Raspberry Pi&apos;s, PICO&apos;s, and Servos, and employed networking
          strategies like Routing and Remote.it for seamless access to the
          interface.
        </p>
        <a
          href="http://webmoti.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
        >
          View Online
        </a>
      </div>

      <div className="w-full sm:w-1/2">
        <img
          src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/WebMoti-yehZicmfhMsXJ80xzUFmZXtZ0gteZg.jpg"
          alt="WebMoti Box"
          className="w-full h-auto object-cover rounded-lg border border-gray-500"
        />
      </div>
    </div>
  );
};

export default Project1;
