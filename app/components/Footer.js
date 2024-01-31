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
          className="w-full p-2 border rounded-md"
        />

        <label htmlFor="email" className="block text-white mt-4 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          className="w-full p-2 border rounded-md"
        />

        <label htmlFor="message" className="block text-white mt-4 mb-2">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={messageRef}
          className="w-full p-2 border rounded-md"
        ></textarea>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>

      </form>
      <div className="social-icons flex justify-center mt-8">
        <a href="https://www.linkedin.com/in/hunter-shiells-337072225/" target="_blank" rel="noopener noreferrer">
          <div className="social-box bg-blue-500 rounded-md p-4 mx-2">
            <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/linked-0fiiHAMh60idrMQuXRez60ln8JRArE" alt="LinkedIn Logo" className="w-16 h-16" />
          </div>
        </a>

        <a href="https://github.com/HunterShiells" target="_blank" rel="noopener noreferrer">
          <div className="social-box bg-blue-500 rounded-md p-4 mx-2">
            <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d-Q5YBnMpo7A87qRs73bp8TMkSiOTGgw.png" alt="GitHub Logo" className="w-16 h-16" />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;