'use client'
import React, { useState, useRef } from "react";
import "../globals.css";
import axios from 'axios';

const handleServerResponse = (success, message) => {
  if (success) {
    alert(message); // You can replace this with your preferred way of displaying success messages
  } else {
    alert(`Error: ${message}`); // Display an error message
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
    <footer className="footer">
      <span>Contact me</span>
      
      <form onSubmit={handleSubmit} className="contact-form text-center">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={messageRef}
        ></textarea>
        <button type="submit">Submit</button>

      </form>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/hunter-shiells-337072225/" target="_blank" rel="noopener noreferrer">
          <div className="social-box" style={{ backgroundColor: '#0aa1ff', borderRadius: '8px', padding: '2rem', display: 'inline-block', margin: '0.5rem' }}>
            <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/linked-0fiiHAMh60idrMQuXRez60ln8JRArE" alt="LinkedIn Logo" style={{ width: '4rem', height: '4rem' }} />
          </div>
        </a>

        <a href="https://github.com/HunterShiells" target="_blank" rel="noopener noreferrer">
          <div className="social-box" style={{ backgroundColor: '#0aa1ff', borderRadius: '8px', padding: '2rem', display: 'inline-block', margin: '0.5rem' }}>
            <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d-Q5YBnMpo7A87qRs73bp8TMkSiOTGgw.png" alt="GitHub Logo" style={{ width: '4rem', height: '4rem' }} />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
