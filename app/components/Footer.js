'use client'
// Import useState and useRef from React
import React, { useState, useRef } from "react";
import "../globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Refs for form validation
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Form data
    const formData = {
      name,
      email,
      message,
    };

    // You can handle the form data submission here (e.g., send an email)

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");

    // Optionally, you can focus on the first input field after submission
    nameRef.current.focus();
  };

  return (
    <footer className="footer">
      <span>Contact me</span>
      
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="contact-form text-center">
        {/* Name input */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />

        {/* Email input */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />

        {/* Message input */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={messageRef}
        ></textarea>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/hunter-shiells-337072225/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={{ fontSize: '5rem', color: 'white', padding:'2rem'}}></i>
        </a>
        <a href="https://github.com/HunterShiells" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={{ fontSize: '5rem', color: 'white', padding:'2rem'}}></i>
        </a>
        {/* Add more social icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
