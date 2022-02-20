import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/home";
import Projects from "./Containers/Problems/problems";
import Contact from "./Containers/Contact/contact";
import Social from "./Components/Socail/Social";
import Spinner from "./Components/UI/Spinner/spinner";
import Weather from "./Components/Weather/weather";
import SignIn from "./Components/SignIn/signIn";
import SignUp from "./Components/SignUp/signUp";
import { GlobalProvider, GlobalState } from "./Context/globalState";

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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  if (user) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproduct" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
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
