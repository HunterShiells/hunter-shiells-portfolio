'use client'
import React from "react";
import "../globals.css";

const Project1 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">WebMoti</h1>
        <p className="text-lg text-center">
          An in class assistant for neurodivergent students learning from hybrid
          setting. Allowing the student to raise a servo controlled hand, ask
          questions, and listen to in person student and teacher feedback. Also
          allowing the teacher to make use of a pan and tilt microphone
          controlled from a Raspberry Pi tablet; allowing the online student a
          hearing aid into the classroom activities. Utilizing Twilio Video to
          create a custom interface for the user; allowing full control of the
          raise hand function and classroom cameras. Made use of the hardware
          side of things using Raspberry Pi's, PICO's and Servos. Along with the
          hardware; software was also involved utilizing many networking
          stratagies such as Routing and Remote.it. Using Open ETH ports the
          traffic would be directed to the box through routing of Remote.it once
          the webpage was accessed.
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

      <div className="w-1/2">
        <img
          src="https://imgur.com/umvPYvO.png"
          alt="WebMoti Box"
          className="w-3/4 h-auto object-cover rounded-lg border border-gray-500"
        />
      </div>
    </div>
  );
};

export default Project1;
