import React, { useState } from 'react';
import './App.css';

function App() {
  const [isTurnOnActive, setIsTurnOnActive] = useState(false);
  const [isTurnOffActive, setIsTurnOffActive] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const turnOn = () => {
    setSliderPosition(100);
    setIsTurnOnActive(true);
    setIsTurnOffActive(false);
  };

  const turnOff = () => {
    setSliderPosition(0);
    setIsTurnOnActive(false);
    setIsTurnOffActive(true);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="left">
          <div className={`top-left ${isTurnOnActive ? 'active' : ''}`}>
            <button onClick={turnOn}>Turn On</button>
          </div>
          <div className={`bottom-left ${isTurnOffActive ? 'active' : ''}`}>
            <button onClick={turnOff}>Turn Off</button>
          </div>
        </div>
        <div className="right">
          <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(e.target.value)} className="slider" disabled={!isTurnOnActive } />
        </div>
      </div>
    </div>
  );
}

export default App;
