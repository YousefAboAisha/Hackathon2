import React, { useState } from "react";
import classes from "./product.module.css";
import Stars from "../../../Components/UI/Stars/stars";

const Problem = ({ elem }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={elem.src} alt={"img"} loading="lazy" />
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

        <button>
          إضافة إلى السلة <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default Problem;
