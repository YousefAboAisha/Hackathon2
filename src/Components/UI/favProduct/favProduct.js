import React from "react";
import classes from "./favProduct.module.css";

const FavProduct = () => {
  return (
    <div className={classes.card}>
      <div className={classes.product}>
        <img
          src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827__340.jpg"
          alt="product"
        />
        <span>ستيك بصوص الدجاج</span>
      </div>
      <div className={classes.quantity}>2</div>
      <div className={classes.price}>3</div>
    </div>
  );
};

export default FavProduct;
