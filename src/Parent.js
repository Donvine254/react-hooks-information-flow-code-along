import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] =useState("#FFF");
  function handleParentColor(){
    const newRandomColor = getRandomColor()
    const newRandomChildColor= getRandomColor()
    setColor(newRandomColor);
    setChildColor(newRandomChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleParentColor} color={childColor}/>
      <Child onChangeColor={handleParentColor} color={childColor}/>
    </div>
  );
}

export default Parent;
