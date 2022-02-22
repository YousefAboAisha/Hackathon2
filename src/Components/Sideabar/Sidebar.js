import React, { useContext, useState } from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Media/logo.svg";
import { GlobalState } from "../../Context/globalState";

const SideBar = ({ toggle, setToggle }) => {
  const { user, setUser } = useContext(GlobalState);

  const logout = () => {
    setUser({});
  };

  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <Link to="/" onClick={() => setToggle(false)}>
        الرئيسية
      </Link>

      {Object.keys(user).length !== 0 ? (
        <Link to="addproduct" onClick={() => setToggle(false)}>
          إضافة منتج
        </Link>
      ) : null}

      <Link to="contact" onClick={() => setToggle(false)}>
        تواصل معنا
      </Link>

      <div className={classes.btns}>
        {Object.keys(user).length === 0 ? (
          <>
            <Link to={"signin"} onClick={() => setToggle(false)}>
              <button>تسجيل الدخول</button>
            </Link>
            <Link to={"signup"} onClick={() => setToggle(false)}>
              <button>إنشاء حساب </button>
            </Link>
          </>
        ) : (
          <Link to={"/"} onClick={() => setToggle(false)}>
            <button className={classes.out} onClick={logout}>
              تسجيل الخروج <i className="fas fa-sign-out-alt"></i>
            </button>
          </Link>
        )}
      </div>

      {/* <img className={classes.logo} src={logo} alt="logo" /> */}

      <div className={classes.social}>
        <a target="_blank" href="https://www.facebook.com/yousef.aboesha.9/">
          <i className="fab fa-facebook"></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a target="_blank" href="https://twitter.com/_abuAisha">
          <i className="fab fa-twitter"></i>
        </a>

        <a target="_blank" href="https://github.com/YousefAboAisha">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <span> All Rights Reserved To Yousef R Abo Aisha ©</span>
    </div>
  );
};

export default SideBar;
