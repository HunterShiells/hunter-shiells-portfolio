'use client'
import React, { useState, useRef } from "react";
import "../globals.css";
import axios from 'axios';

const handleServerResponse = (success, message) => {
  if (success) {
    alert(message); 
  } else {
    alert(`Error: ${message}`);
  }
};

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xbjndnlb',
      data: formData,
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        console.error('Axios error:', error);
        handleServerResponse(false, 'An error occurred while submitting the form.');
      });

    setName("");
    setEmail("");
    setMessage("");

    nameRef.current.focus();
  };

  return (
    <footer className="footer p-8 md:p-16 lg:p-24">
      <span className="text-white text-lg md:text-xl lg:text-2xl">Contact me</span>
      
      <form onSubmit={handleSubmit} className="contact-form text-center mt-4">
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
          className="p-2 border rounded-md mb-4 w-64 md:w-full lg:w-full"
        />

        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          className="p-2 border rounded-md mb-4 w-64 md:w-full lg:w-full"
        />

        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={messageRef}
            className="p-2 border rounded-md mb-4 w-64 h-32 md:h-48 md:w-full lg:w-full lg:h-64"
          ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full md:w-auto">Submit</button>

      </form>
      <div className="social-icons flex justify-center mt-8 ">
        <a href="https://www.linkedin.com/in/hunter-shiells-337072225/" target="_blank" rel="noopener noreferrer">
          <div className="social-box bg-blue-500 rounded-md p-2 w-14 h-14 mx-2 md:h-15 md:w-15">
            <img src="https://lh3.googleusercontent.com/d/1u60Y24MLnehyreBoBoOptOF3GdtuqpWG=s60?authuser=1" alt="LinkedIn Logo" className="" />
          </div>
        </a>

        <a href="https://github.com/HunterShiells" target="_blank" rel="noopener noreferrer">
          <div className="social-box bg-blue-500 rounded-md p-2 w-14 h-14 mx-2">
            <img src="https://lh3.googleusercontent.com/d/1P2CeGR6qsA6On2uTW180AXQkU-QY88h-=s60?authuser=1" alt="GitHub Logo" className="" />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;