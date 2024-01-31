import React from 'react';
import "../globals.css";

const Stack = () => {
  return (
    <div className="stack-container">
      <h1 className="stack-heading font-bold">Languages Spoken</h1>

      <div className="ferris-wheel">
        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/JS-PAbMEpDMMWjyC417vR1wTOwQqpIzPM" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">JavaScript</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/PYTHON-tbNkbv0NyoXVUTNx2Arj4x1hozpjCr.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">Python</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/MYSQL-btqSdB1Qr6wcMgTOf9oCapL98BYNlb.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">DB/SQL</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/HTML5-7glLsgc1gyIk8mtmHkM1ckkAtS3KnA.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">HTML</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/CSS-1PgN0Z2n2q7mkBbOvrFc3GRs8n6J4J.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">CSS</p>
        </div>

        <div className="stack-item bubble-box">
          <img src="https://oslcg8bz7ey9h2ti.public.blob.vercel-storage.com/REACT-1MjG85TElDZkTzWItgzxruqoa6MY1f.png" alt="Technology Logo" className="stack-logo" />
          <p className="stack-name">React</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
