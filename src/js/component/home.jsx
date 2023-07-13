import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [showPurple, setShowPurple] = useState(false);

  const handleClick = (selectedColor) => {
    if (selectedColor === 'purple') {
      setShowPurple(true);
    } else {
      setColor(selectedColor);
      setShowPurple(false);
    }
  };

  const cycleColors = () => {
    switch (color) {
      case 'red':
        setColor('green');
        setShowPurple(false);
        break;
      case 'green':
        setColor('yellow');
        setShowPurple(false);
        break;
      case 'yellow':
        setColor('red');
        setShowPurple(false);
        break;
      default:
        break;
    }
  };

  const addPurpleColor = () => {
    if (!showPurple) {
      setShowPurple(true);
    }
  };

  return (
    <div className="traffic-light">
      <div className="container">
        <div className={`light red-light ${color === 'red' ? 'glow' : ''}`} onClick={() => handleClick('red')} />
        {!showPurple && (
          <div className={`light yellow-light ${color === 'yellow' ? 'glow' : ''}`} onClick={() => handleClick('yellow')} />
        )}
        {showPurple && <div className="light purple-light glow" onClick={() => handleClick('purple')} />}
        <div className={`light green-light ${color === 'green' ? 'glow' : ''}`} onClick={() => handleClick('green')} />
      </div>

      <div className="button-container">
        <button onClick={cycleColors}>Cycle Colors</button>
        <button onClick={addPurpleColor}>Add Purple Color</button>
      </div>
    </div>
  );
};

export default TrafficLight;
