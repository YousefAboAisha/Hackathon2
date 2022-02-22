import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import Navigation from "../UI/link/link";
import SideBar from "../Sideabar/Sidebar";
import logo from "../../Media/logo.svg";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Context/globalState";
import Menu from "../UI/menu/menu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, favProducts } = useContext(GlobalState);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  console.log("Navbar User", user);

  return (
    <>
      <nav>
        <div className={classes.left}>
          <Navigation path="/" name="الرئيسية" />
          {Object.keys(user).length !== 0 ? (
            <Navigation path="addproduct" name="إضافة منتج" />
          ) : null}
          <Navigation path="about" name="من نحن" />
          <Navigation path="contact" name="دعم فني" />
        </div>

        <div className={classes.middle}>
          <i className="fas fa-search"></i>
          <input type={"text"} placeholder={"ابحث هنا..."} />
        </div>

        <div className={classes.right}>
          {Object.keys(user).length !== 0 ? (
            <Link to="cart">
              <div className={classes.ring}>
                <i className="fas fa-shopping-cart"></i>
                {favProducts.length === 0 ? null : (
                  <span>{favProducts.length}</span>
                )}
              </div>
            </Link>
          ) : null}

          {Object.keys(user).length !== 0 ? (
            <div className={classes.ring}>
              <i className="fas fa-heart"></i>
            </div>
          ) : null}

          {Object.keys(user).length !== 0 ? (
            <div className={classes.ring}>
              <i className="fas fa-bell"></i>
            </div>
          ) : null}

          <div className={classes.user}>
            <Menu />
          </div>

          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
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
