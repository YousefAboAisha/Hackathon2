import React, { useContext } from "react";
import classes from "./favProduct.module.css";
import { GlobalState } from "../../../Context/globalState";

const FavProduct = ({ card }) => {
  const { removeProductFromFav, addProductToCart, cart } =
    useContext(GlobalState);

  let storedHouses = cart.find((product) => product.id === card.id);
  const disabledBtn = storedHouses ? true : false;

  console.log(card);

  return (
    <div className={classes.card}>
      <div className={classes.product}>
        <img src={card.src} alt="product" />
        <span>{card.name}</span>
      </div>

      <div className={classes.price}> $ {card.price}</div>

      <div className={classes.add} onClick={() => addProductToCart(card)}>
        <button disabled={disabledBtn}>
          <i className="fas fa-cart-plus"></i>
        </button>
      </div>

      <div
        className={classes.remove}
        onClick={() => removeProductFromFav(card.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default FavProduct;
