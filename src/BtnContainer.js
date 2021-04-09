import React from "react";
import { useProductsContext } from "./Context";
const BtnContainer = () => {
  const {
    number,
    clearSketch,
    changeNumber,
    setBlack,
    setColor,
  } = useProductsContext();
  return (
    <div className='btn-container'>
      <button className='button clear-btn' onClick={clearSketch}>
        {" "}
        Clear
      </button>
      <div className='color-btn-container'>
        <button className='button' onClick={setColor}>
          Multi-color
        </button>
        <button className='button' onClick={setBlack}>
          Black
        </button>
      </div>
      <div>
        <input
          type='range'
          id='volume'
          name='volume'
          min='1'
          max='64'
          onChange={changeNumber}
          value={number}
        />
        <label for='volume'>
          Number of Boxes:{number} *{number}
        </label>
      </div>
    </div>
  );
};

export default BtnContainer;
