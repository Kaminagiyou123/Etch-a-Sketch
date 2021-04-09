import React from "react";

const Reducer = (state, action) => {
  if (action.type === "CLEAR_SKETCH") return { ...state, clear: true };
  if (action.type === "CLEAR_FALSE") return { ...state, clear: false };
  if (action.type === "CHANGE_NUMBER")
    return { ...state, number: action.payload };
  if (action.type === "SET_COLOR") return { ...state, color: 0 };
  if (action.type === "SET_BLACK") return { ...state, color: 1 };

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default Reducer;
