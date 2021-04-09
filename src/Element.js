import React, { useState, useEffect } from "react";
import { useProductsContext } from "./Context";
const Element = ({ i }) => {
  const { clear, setClearFalse, color } = useProductsContext();
  const [active, setActive] = useState(false);
  useEffect(() => setActive(false), [clear]);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  const randomStyle = {
    background: randomColor,
    border: `1px solid rgba(0, 0, 0, 0.8)`,
  };

  return color !== 1 ? (
    <div
      key={i}
      className={
        clear ? "grid-item" : active ? "grid-item-active" : "grid-item"
      }
      style={active ? randomStyle : null}
      onMouseEnter={() => {
        setClearFalse();
        setActive(true);
      }}
    ></div>
  ) : (
    <div
      key={i}
      className={
        clear ? "grid-item" : active ? "grid-item-active" : "grid-item"
      }
      onMouseEnter={() => {
        setClearFalse();
        setActive(true);
      }}
    ></div>
  );
};

export default Element;
