import React from "react";
import classes from "./form2.module.css";

const Form2 = ({ card, setCard, phoneNumber, setPhoneNumber }) => {
  return (
    <div className={classes.box}>
      <i className="fas fa-phone-square"></i>
      <h3>معلومات الاتصال</h3>
      <div className={classes.input}>
        <input
          type="tel"
          placeholder="رقم البطاقة"
          required
          onChange={(e) => setCard(e.target.value)}
          value={card}
          minLength={16}
          maxLength={16}
        />
      </div>
      <div className={classes.input}>
        <input
          type="tel"
          placeholder="رقم الهاتف"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          minLength={10}
          maxLength={10}
        />
      </div>
    </div>
  );
};

export default Form2;
