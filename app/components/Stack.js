import React from 'react';
import "../globals.css";

const Stack = () => {
  return (
    <div className="stack-container">
      <h1 className="stack-heading">Languages Spoken</h1>

      <div className="ferris-wheel">
        <div className="stack-item bubble-box">
          {/* Language 1 */}
          <img src="path/to/technology-logo.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Technology Name 1</p>
        </div>

        <div className="stack-item bubble-box">
          {/* Language 2 */}
          <img src="path/to/technology-logo.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Technology Name 2</p>
        </div>

        <div className="stack-item bubble-box">
          {/* Language 3 */}
          <img src="path/to/technology-logo.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Technology Name 3</p>
        </div>

        <div className="stack-item bubble-box">
          {/* Language 4 */}
          <img src="path/to/technology-logo.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Technology Name 4</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
