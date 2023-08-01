import React, { useState } from "react";

const Text = ({ text }) => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  let [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  setInterval(
    () => setColor([randomColor(), randomColor(), randomColor()]),
    500
  );
  return (
    <div className="text">
      <h1 style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
        {text}
      </h1>
    </div>
  );
};

export default Text;
