import React, { useState } from "react";
import classes from "./productCard.module.css";
import Stars from "../Stars/stars";

const Problem = ({ elem, type }) => {
  const [isOpened, setIsOpened] = useState(false);
  const priceAfterDiscount = (
    elem.price -
    (elem.price * elem.discount) / 100
  ).toFixed(2);

  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={elem.src} alt={"img"} loading="lazy" />
        <button>
          إضافة إلى السلة
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>

      <div className={classes.text}>
        <h4>{elem.name} </h4>
        <span>{elem.info}</span>

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
          {type !== "product" ? <span>$ {priceAfterDiscount}</span> : null}
          <span>$ {elem.price}</span>
        </div>
        <button>شراء الآن</button>
      </div>
    </div>
  );
};

export default Problem;
