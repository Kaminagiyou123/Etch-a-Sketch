import React from "react";
import Element from "./Element";
const Array = ({ n, clear }) => {
  let array = [];
  for (let i = 0; i < n * n; i++) {
    array.push(<Element key={i} clear={clear} />);
  }

  return array;
};

export default Array;
