import { useState } from 'react';
import './App.css';

const App = () => { 
  const [dots, setDots] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    };

    setDots((prev) => [...prev, newDot]);
  };

  const handleUndo = (event) => {
    event.stopPropagation();

    if (dots.length === 0)
      return;

    const lastDot = dots[dots.length - 1];
    setUndid((prev) => [...prev, lastDot]);

    setDots((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    });
  };

  const handleRedo = (event) => {
    event.stopPropagation();

    if (undid.length === 0)
      return;

    const recoveredDot = undid[undid.length - 1];
    setUndid((prev) => {
      const newArray = [...prev].slice(0, -1);
      return newArray;
    });

    setDots((prev) => [...prev, recoveredDot]);
  };

  return (
    <div id='main' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {
        dots.map((value, index) => {
          return <span key={index} className='dot' style={{top: value.clientY, left: value.clientX}}></span>
        })
      }
    </div>
  );
};

export default App;
