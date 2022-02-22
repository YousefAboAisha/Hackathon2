import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/home";
import Projects from "./Containers/Problems/problems";
import Contact from "./Containers/Contact/contact";
import Social from "./Components/Socail/Social";
import Spinner from "./Components/UI/Spinner/spinner";
import Weather from "./Components/Messenger/messenger";
import SignIn from "./Components/SignIn/signIn";
import SignUp from "./Components/SignUp/signUp";
import About from "./Containers/About/about";
import ProductCheckout from "./Components/ProductCheckout/productCheckout";
import Cart from "./Components/Cart/cart";
import { GlobalProvider } from "./Context/globalState";

function App() {
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  console.log("App User", JSON.parse(user));

  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="about" element={<About />} />
      <Route path="checkout" element={<ProductCheckout />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  if (user) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<ProductCheckout />} />
        <Route path="cart" element={<Cart />} />
        <Route path="addproduct" element={<Projects />} />
        <Route path="contact" element={<Contact />} />{" "}
        <Route path="about" element={<About />} />
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
