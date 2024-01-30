import React from 'react';
import "../globals.css";

const Stack = () => {
  return (
    <div className="stack-container">
      <h1 className="stack-heading font-bold">Languages Spoken</h1>

      <div className="ferris-wheel">
        <div className="stack-item bubble-box">
          <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">JavaScript</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://imgur.com/ibyEQbW.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Python</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://imgur.com/YrAZLIt.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">DB/SQL</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://imgur.com/M5K3FIi.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">HTML</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://imgur.com/h2EURoh.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">CSS</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://imgur.com/CEnG97w.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">React</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
