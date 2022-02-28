import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// initial State
const initialState = {
  favProducts: JSON.parse(localStorage.getItem("favProducts")) || [],
  id: localStorage.getItem("productId") || "",
  user: JSON.parse(localStorage.getItem("token")) || {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

// Create context
export const GlobalState = createContext(AppReducer);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(state.favProducts));
    localStorage.setItem("productId", state.id);
    localStorage.setItem("token", JSON.stringify(state.user));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state, AppReducer]);

  const addProductToFav = (card) => {
    dispatch({ type: "ADD_PRODUCT_TO_WISH_LIST", payload: card });
  };

  const removeProductFromFav = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FORM_WISH_LIST", payload: id });
  };

  const addProductToCart = (card) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: card });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FORM_CART", payload: id });
  };

  const setProductId = (id) => {
    dispatch({ type: "SET_PRODUCT_ID", payload: id });
  };

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  return (
    <GlobalState.Provider
      value={{
        favProducts: state.favProducts,
        addProductToFav,
        removeProductFromFav,
        id: state.id,
        setProductId,
        user: state.user,
        setUser,
        addProductToCart,
        removeProductFromCart,
        cart: state.cart,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
