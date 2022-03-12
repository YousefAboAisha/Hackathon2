import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/home";
import Contact from "./Containers/Contact/contact";
import Social from "./Components/Socail/Social";
import Spinner from "./Components/UI/Spinner/spinner";
import Weather from "./Components/Messenger/messenger";
import SignIn from "./Components/SignIn/signIn";
import SignUp from "./Components/SignUp/signUp";
import ProductCheckout from "./Components/ProductCheckout/productCheckout";
import Favorite from "./Components/Favorite/favorite";
import Cart from "./Components/cart/cart";
import Orders from "./Containers/Orders/orders";
import Fruits from "./Containers/Catagories/fruits/fruits";
import { GlobalProvider } from "./Context/globalState";

function App() {
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  console.log("Test", user === "{}");

  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="checkout" element={<ProductCheckout />} />
      <Route path="catagories/fruits" element={<Fruits />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  if (user !== "{}") {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<ProductCheckout />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="contact" element={<Contact />} />{" "}
        <Route path="/catagories/fruits" element={<Fruits />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return loading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <GlobalProvider>
        {routes}
        <div className="App">
          <Weather />
          <Social />
          <Navbar />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
