import React, { useState } from 'react';
import './DiceRollS.scss'

const getRandomRotation = () => {
  const x = Math.floor(Math.random(10) * 360);
  const y = Math.floor(Math.random(10) * 360);
  const z = Math.floor(Math.random(10) * 360);
  return { x, y, z };
};

const Dice = () => {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [key, setKey] = useState(1);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const handleClick = () => {
    setRolling(true);
    setValue(Math.floor(Math.random() * 6) + 1);
    setKey(key + 1);
    setRotation(getRandomRotation());
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="dice-container">
      <div
        className={`dice ${rolling ? "rolling" : ""}`}
        onClick={handleClick}
        key={key}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        }}
      >
        <div className="dice-face dice-face-1">
          <p>1</p>
        </div>
        <div className="dice-face dice-face-2">
          <p>2</p>
        </div>
        <div className="dice-face dice-face-3">
          <p>3</p>
        </div>
        <div className="dice-face dice-face-4">
          <p>4</p>
        </div>
        <div className="dice-face dice-face-5">
          <p>5</p>
        </div>
        <div className="dice-face dice-face-6">
          <p>6</p>
        </div>
      </div>
    </div>
  );
};

export default Dice;

// const Dice = () => {
//   const [value, setValue] = useState(1);
//   const [rolling, setRolling] = useState(false);
//   const [key, setKey] = useState(1);

//   const handleClick = () => {
//     setRolling(true);
//     setValue(Math.floor(Math.random() * 6) + 1);
//     setKey(key + 1);
//     setTimeout(() => {
//       setRolling(false);
//     }, 1000);
//   };

//   return (
//     <div className='dice-container'>
//       <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={handleClick} key={key}>
//         <div className="dice-face dice-face-1"><p>1</p></div>
//         <div className="dice-face dice-face-2"><p>2</p></div>
//         <div className="dice-face dice-face-3"><p>3</p></div>
//         <div className="dice-face dice-face-4"><p>4</p></div>
//         <div className="dice-face dice-face-5"><p>5</p></div>
//         <div className="dice-face dice-face-6"><p>6</p></div>
//       </div>
//     </div>
//   );
// };

// export default Dice;