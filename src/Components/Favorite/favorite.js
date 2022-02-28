import React, { useContext } from "react";
import classes from "./favorite.module.css";
import { GlobalState } from "../../Context/globalState";
import FavProduct from "../UI/favProduct/favProduct";
import Heading from "../UI/heading/heading";

const Favorite = () => {
  const { favProducts } = useContext(GlobalState);

  return (
    <div className={classes.box}>
      <div className={classes.favorite}>
        <div className={classes.header}>
          <Heading title={"المنتجات المفضلة"} />
        </div>
        {favProducts.length !== 0 ? (
          favProducts.map((card, index) => {
            return <FavProduct card={card} key={index} />;
          })
        ) : (
          <h2>قم بإضافة بعض المنتجات إلى المفضلة</h2>
        )}
      </div>
    </div>
  );
};

export default Favorite;
