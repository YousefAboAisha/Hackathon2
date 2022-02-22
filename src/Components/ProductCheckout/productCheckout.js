import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Context/globalState";
import classes from "./productCheckout.module.css";
import Stars from "../UI/Stars/stars";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";

const ProductCheckout = () => {
  const { id } = useContext(GlobalState);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://hackathon2-242f0-default-rtdb.firebaseio.com/Products/-MwNcX0-39d-sWSkKZgr.json"
      )
      .then((res) => {
        const fetchedData = res.data;
        const arr = [];
        for (let product in fetchedData) {
          arr.push(fetchedData[product]);
        }
        setData(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const product = data[id - 1];
  console.log("Fetched Data Is : ", data);

  return product ? (
    <div className={classes.checkout}>
      <div className={classes.offer}>
        <div className={classes.left}>
          <h3>{product.name}</h3>
          <span>{product.info}</span>
          <p>{product.description}</p>
          <span>{product.price} $</span>
          <div className={classes.rating}>
            <Stars rate={product.rate} />
          </div>
        </div>
        <div className={classes.right}>
          <img
            src={
              product.src
                ? product.src
                : "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
            }
            alt="product"
          />
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default ProductCheckout;
