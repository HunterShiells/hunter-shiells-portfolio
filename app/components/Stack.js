import React from 'react';
import "../globals.css";

const Stack = () => {
  return (
    <div className="stack-container">
      <h1 className="stack-heading font-bold">Languages Spoken</h1>

      <div className="ferris-wheel">
        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/1_E5ozboWMC8zMZshO3tYnIuXbHXoxXUQ=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">JavaScript</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/1WHE8tOAla0F0hISw7GBE2gicUHL50vGP=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Python</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/13iYz8Z3cjUPyzDh6z22rC0g6TT2sG9Z2=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">DB/SQL</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/14af-AjhnuO4crJgA2BzfAfp4nIrCPwy-=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">HTML</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/1Edokgbr8TX7t6SRDxWa2iTw_z4I4_Iah=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">CSS</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://lh3.googleusercontent.com/d/1rz7-NhGzt_M1vfhTJshJmVj2KHABPCmZ=s1000?authuser=1" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">React</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
