import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import Navigation from "../UI/link/link";
import SideBar from "../Sideabar/Sidebar";
import logo from "../../Media/logo.svg";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Context/globalState";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, setUser } = useContext(GlobalState);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  const logout = () => {
    setUser({});
  };

  console.log("Navbar User", user);

  return (
    <>
      <nav>
        <div className={classes.left}>
          {/* <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link> */}

          <div className={classes.ring}>
            <i className="fas fa-shopping-cart"></i>
            <span>3</span>
          </div>

          <div className={classes.ring}>
            <i className="fas fa-bell"></i>
            <span>3</span>
          </div>

          <div className={classes.user}>
            <i className="fas fa-user-circle"></i>
            {Object.keys(user).length !== 0 ? (
              <span>
                @{user.user.email.slice(0, user.user.email.indexOf("@"))}
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>

        <div className={classes.right}>
          <Navigation path="contact" name="تواصل معنا" />
          {Object.keys(user).length !== 0 ? (
            <Navigation path="addproduct" name="إضافة منتج" />
          ) : null}
          <Navigation path="/" name="الرئيسية" />
          {Object.keys(user).length === 0 ? (
            <>
              <Link to={"signin"}>
                <button>تسجيل الدخول</button>
              </Link>
              <Link to={"signup"}>
                <button>إنشاء حساب </button>
              </Link>
            </>
          ) : (
            <Link to={"/"}>
              <button className={classes.out} onClick={logout}>
                تسجيل الخروج <i className="fas fa-sign-out-alt"></i>
              </button>
            </Link>
          )}
        </div>

        <div className={classes.toggle} onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Navbar;
