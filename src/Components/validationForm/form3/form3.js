import React, { useEffect } from "react";
import classes from "./form3.module.css";

const Form3 = ({ name, address, totalPrice, productArr, setData }) => {
  const estimatedTime = Math.floor(Math.random() * (45 - 25) + 25);
  const data = {
    Name: name,
    Address: address,
    TotalPrice: totalPrice,
    Products: productArr,
    Time: estimatedTime,
    Status: -1,
  };

  useEffect(() => {
    setData(data);
  }, [name, address, totalPrice, productArr, setData]);

  console.log("MyData", data);

  return (
    <div className={classes.box}>
      <i className="fas fa-check-square"></i>
      <h3>تأكيد الطلبية</h3>
      <div className={classes.order}>
        <span>الاسم</span>
        <span>{name}</span>
      </div>
      <div className={classes.order}>
        <span>العنوان </span>
        <span>{address}</span>
      </div>

      <div className={classes.order}>
        <span>المُنتج</span>
        {productArr.map((elem, index) => {
          return (
            <span style={{ color: "var(--color1)" }} key={index}>
              {elem}
            </span>
          );
        })}
      </div>

      <div className={classes.order}>
        <span>السعر الإجمالي</span>
        <span>$ {totalPrice}</span>
      </div>

      <div className={classes.order}>
        <span>وقت الوصول المتوقع</span>
        <span>{estimatedTime} دقيقة</span>
      </div>
    </div>
  );
};

export default Form3;
