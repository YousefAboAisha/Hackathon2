import React, { useState, useContext } from "react";
import classes from "./productCard.module.css";
import Stars from "../Stars/stars";
import { GlobalState } from "../../../Context/globalState";
import Snackbar from "../Snackbar/snackbar";
import { useNavigate } from "react-router";

const Problem = ({ elem, type }) => {
  const [isOpened, setIsOpened] = useState(false);
  const priceAfterDiscount = (
    elem.price -
    (elem.price * elem.discount) / 100
  ).toFixed(2);
  const [count, setCount] = useState(1);
  const { addProductToFav, favProducts, user, setProductId } =
    useContext(GlobalState);
  const [isAdded, setIsAdded] = useState(false);

  const addToFavHandler = (product) => {
    addProductToFav(product);
    setIsAdded(true);
  };

  let storedHouses = favProducts.find((product) => product.id === elem.id);
  const disabledBtn = storedHouses ? true : false;

  const navigate = useNavigate();

  const buyHandler = (id) => {
    setProductId(id);
    navigate("checkout");
  };

  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={elem.src} alt={"img"} loading="lazy" />
      </div>

      {isAdded ? <Snackbar msg={"تمت إضافة منتج جديد إلى السلة"} /> : null}

      <div className={classes.text}>
        <h4>{elem.name} </h4>
        {/* <span>{elem.info}</span> */}

        <div className={classes.rate}>
          <Stars rate={elem.rate} />
        </div>

        {!isOpened ? (
          <p>
            {elem.description.slice(0, 50)}
            <span onClick={() => setIsOpened(!isOpened)}> المزيد... </span>
          </p>
        ) : (
          <p>
            {elem.description}
            <span onClick={() => setIsOpened(!isOpened)}> عرض أقل</span>
          </p>
        )}

        <div className={classes.price}>
          {type === "product" ? <span>$ {priceAfterDiscount}</span> : null}
          <span>$ {elem.price}</span>
        </div>
        <div className={classes.btns}>
          <button onClick={() => buyHandler(elem.id)}>شراء الآن</button>

          {Object.keys(user).length === 0 ? null : (
            <button
              onClick={() => addToFavHandler(elem)}
              disabled={disabledBtn}
            >
              <i class="fas fa-heart"></i>
            </button>
          )}

          {/* <div className={classes.quantity}>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button
              disabled={count <= 1 ? true : false}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Problem;
