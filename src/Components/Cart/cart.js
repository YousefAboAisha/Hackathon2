import React, { useContext } from "react";
import classes from "./cart.module.css";
import { GlobalState } from "../../Context/globalState";
import FavProduct from "../UI/favProduct/favProduct";

const Favorite = () => {
  const { user } = useContext(GlobalState);

  return (
    <div className={classes.box}>
      <div className={classes.user}>
        <i className="fas fa-user-circle"></i>
        <span>{user.user.email}</span>
      </div>

      <div className={classes.favorite}>
        <div className={classes.header}>
          <span>السعر</span>
          <span>الكمية</span>
          <span>المنتج</span>
        </div>
        <FavProduct />
      </div>
    </div>
  );
};

export default Favorite;
