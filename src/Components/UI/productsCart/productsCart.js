import React, { useContext, useState, useEffect } from "react";
import classes from "./productsCart.module.css";
import { GlobalState } from "../../../Context/globalState";

const ProductsCart = ({ card, setTotalPrice, setProductArr }) => {
  const { removeProductFromCart, cart } = useContext(GlobalState);
  const [count, setCount] = useState(1);
  const [available, setAvailable] = useState("");
  const [price, setPrice] = useState(card.price);
  const [quantity, setQuantity] = useState(card.quantity);

  const inc = () => {
    setCount(count + 1);
    card.quantity = count;
  };

  const dec = () => {
    setCount(count - 1);
    card.quantity = count;
  };

  useEffect(() => {
    setQuantity(count);
    setPrice((card.price * quantity).toFixed(2));
    card.quantity = count;
    console.log("Card is ", card);
  }, [count, price, card.quantity]);

  useEffect(() => {
    let price = 0;
    for (let elem of cart) {
      price = price + parseFloat(elem.price * elem.quantity);
    }
    setTotalPrice(price);
  }, [quantity, removeProductFromCart]);

  useEffect(() => {
    let arr = [];
    for (let elem of cart) {
      arr.push(elem.name);
    }
    setProductArr(arr);
  }, [removeProductFromCart]);

  useEffect(() => {
    setAvailable(Math.floor(Math.random() * 20) + 5);
  }, []);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.product}>
          <img src={card.src} alt="product" />
          <span>{card.name}</span>
        </div>

        <div className={classes.price}>$ {(card.price * count).toFixed(2)}</div>

        <div className={classes.quantity}>
          <button onClick={inc} disabled={count >= available ? true : false}>
            <i className="fas fa-plus-circle"></i>
          </button>
          <span>{count}</span>
          <button disabled={count <= 1 ? true : false} onClick={dec}>
            <i className="fas fa-minus-circle"></i>
          </button>
        </div>

        <div className={classes.available}>
          <span>الكمية المتاحة :</span>
          <span>{available}</span>
        </div>

        <div
          className={classes.remove}
          onClick={() => removeProductFromCart(card.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
