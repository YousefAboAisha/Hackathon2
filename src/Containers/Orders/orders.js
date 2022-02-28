import React, { useState, useEffect } from "react";
import classes from "./orders.module.css";
import Heading from "../../Components/UI/heading/heading";
import Order from "./order/order";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner/spinner";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let i = 1;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://hackathon2-242f0-default-rtdb.firebaseio.com/Orders.json")
      .then((res) => {
        console.log(res.data);
        let arr = [];
        for (let elem in res.data) {
          arr.push(res.data[elem]);
        }
        setData(arr);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.box}>
      <Heading title={"طلباتي"} />
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.cards}>
          {data &&
            data.map((elem, index) => {
              return <Order key={index} order={elem} id={i++} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Orders;
