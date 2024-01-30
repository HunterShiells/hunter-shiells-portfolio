import React from "react";

const Project3 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Text on the left */}
      <div className="w-1/3 text-white p-8 ">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Shop-Front-Web-App
        </h1>
        <p className="text-lg text-center">
          I designed and implemented a dynamic web application using a
          technology stack that included JavaScript, PHP, HTML, and CSS. To
          facilitate live database management controlled by PHP, I leveraged
          XAMPP, ensuring robust functionality. For the front-end, I employed
          React to create an intuitive and streamlined user interface,
          implementing React Routes for seamless page navigation. The focus of
          this project was the development of an innovative online smart trip
          planning system, specifically tailored for efficient delivery of
          electronic products in urban and suburban settings. The platform
          facilitates a smooth online shopping experience, allowing users to
          effortlessly add items to their cart, proceed to checkout, and
          simultaneously update a hosted database in real-time. This holistic
          approach ensures both user satisfaction and operational efficiency.
          <div></div>
          <a
            href="https://github.com/HunterShiells/Shop-Front-Web-App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
          >
            View Github
          </a>
        </p>
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

export default Project3;
