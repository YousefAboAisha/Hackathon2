import React from "react";
import classes from "./form1.module.css";

const Form1 = ({ name, setName, address, setAddress }) => {
  return (
    <div className={classes.box}>
      <i className="fas fa-user-check"></i>
      <h3>المعلومات الشخصية</h3>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="الاسم الكامل"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          minLength={4}
        />
      </div>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="عنوان الاستلام"
          required
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          minLength={4}
        />
      </div>
    </div>
  );
};

export default Form1;
