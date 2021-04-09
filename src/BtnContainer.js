import React from "react";

const BtnContainer = () => {
  return (
    <div className='btn-container'>
      <button className='button clear-btn'> Clear</button>
      <div className='color-btn-container'>
        <button className='button'>Multi-color</button>
        <button className='button '>Black</button>
      </div>
      <div>
        <input type='range' id='volume' name='volume' min='1' max='64' />
        <label for='volume'>Number of Boxes</label>
      </div>
    </div>
  );
};

export default BtnContainer;
