import React from "react";
import classes from "./order.module.css";

const Order = ({ order, id }) => {
  let status = <span className={classes.one}>تم إرسال الطلب</span>;

  if (order.Status === 0) {
    status = <span className={classes.two}>جارٍ التوصيل</span>;
  } else if (order.Status === 1) {
    status = <span className={classes.three}>تم التوصيل</span>;
  }

  return (
    <div className={classes.card}>
      <span>{id}</span>
      <div className={classes.products}>
        <span>اسم المُنتج</span>
        {order.Products.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>

      <div className={classes.price}>
        <span>السعر</span>
        <span>$ {order.TotalPrice}</span>
      </div>

      <div className={classes.address}>
        <span>عنوان الطلبية</span>
        <span>{order.Address}</span>
      </div>

      <div className={classes.status}>
        <span>الوقت المنقضي</span>
        <span>{order.Time} دقيقة</span>
      </div>

      <div className={classes.status}>
        <span>الحالة</span>
        {status}
      </div>

      <div className={classes.name}>
        <span>بواسطة</span>
        <span>{order.Name}</span>
      </div>
    </div>
  );
};

export default Order;
