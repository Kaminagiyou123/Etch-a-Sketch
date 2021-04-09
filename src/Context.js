import React, { useContext, useReducer } from "react";
import Reducer from "./Reducer";
const initialState = {
  number: 16,
  color: 0,
  clear: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearSketch = () => {
    dispatch({ type: "CLEAR_SKETCH" });
  };
  const setClearFalse = () => {
    dispatch({ type: "CLEAR_FALSE" });
  };
  const changeNumber = (e) => {
    let value = parseInt(e.target.value);

    dispatch({ type: "CHANGE_NUMBER", payload: value });
  };
  const setBlack = () => {
    dispatch({ type: "SET_BLACK" });
  };
  const setColor = () => {
    dispatch({ type: "SET_COLOR" });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        clearSketch,
        changeNumber,
        setBlack,
        setColor,
        setClearFalse,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
