import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import Navigation from "../UI/link/link";
import SideBar from "../Sideabar/Sidebar";
import logo from "../../Media/logo.svg";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Context/globalState";
import Menu from "../UI/menu/menu";
import MenuListComposition from "../UI/navMenu/navMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, cart } = useContext(GlobalState);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  console.log("Navbar User", user);

  return (
    <>
      <nav>
        <div className={classes.left}>
          <Navigation path="/" name="الرئيسية" />
          <MenuListComposition />
          <Navigation path="contact" name="تواصل معنا" />
        </div>

        <div className={classes.middle}>
          <i className="fas fa-search"></i>
          <input type={"text"} placeholder={"ابحث هنا..."} />
        </div>

        <div className={classes.right}>
          <Link to={"/"}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>

          {Object.keys(user).length !== 0 ? (
            <Link to="favorite">
              <div className={classes.fav}>
                <i className="far fa-heart"></i>{" "}
              </div>
            </Link>
          ) : null}

          {Object.keys(user).length !== 0 ? (
            <Link to="cart">
              <div className={classes.ring}>
                <i className="fas fa-shopping-cart"></i>
                {cart.length === 0 ? null : <span>{cart.length}</span>}
              </div>
            </Link>
          ) : null}

          <div className={classes.lang}>
            <i className="fas fa-globe"></i>
          </div>

          <div className={classes.user}>
            <Menu />
          </div>
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
