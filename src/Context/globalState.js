import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// initial State
const initialState = {
  favProducts: JSON.parse(localStorage.getItem("favProducts")) || [],
  id: JSON.parse(localStorage.getItem("productId")) || [],
};

// Create context
export const GlobalState = createContext(AppReducer);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(state.favProducts));
    localStorage.setItem("productId", JSON.stringify(state.id));
  }, [state]);

  const addProductToFavProducts = (house) => {
    dispatch({ type: "ADD_PRODUCT_TO_WISH_LIST", payload: house });
  };

  const removeProductFromFavProducts = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FORM_WISH_LIST", payload: id });
  };

  const setProductId = (id) => {
    dispatch({ type: "SET_PRODUCT_ID", payload: id });
  };

  return (
    <GlobalState.Provider
      value={{
        favProducts: state.favProducts,
        addProductToFavProducts,
        removeProductFromFavProducts,
        id: state.id,
        setProductId,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
