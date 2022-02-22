import React, { useState } from "react";
import classes from "./messenger.module.css";
import Spinner from "../UI/Spinner/spinner";

const Wether = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  if (Object.keys(data).length !== 0) {
    console.log("Data is ", data);
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className={classes.toggle} title="Show forcast info">
        <img
          src="https://img.icons8.com/color/48/000000/facebook-messenger.png"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={classes.box}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
      >
        <i className="fas fa-times" onClick={() => setOpen(false)}></i>
        <span className={classes.timezone}>Gaza City</span>
        <div className={classes.sky}>
          <img src="https://img.icons8.com/emoji/30/000000/sun-emoji.png" />
          <div className={classes.skyInfo}>
            <span>Clear Sky</span>
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.wrap}>
            <img
              src="https://img.icons8.com/fluency/32/000000/thermometer.png"
              alt="icon"
            />
            <span>38 C</span>
          </div>
          <div className={classes.wrap}>
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/32/000000/external-humidity-weather-justicon-lineal-color-justicon.png" />
            <span>54 %</span>
          </div>

          <div className={classes.wrap}>
            <img src="https://img.icons8.com/color/32/000000/atmospheric-pressure.png" />
            <span>45 Pa</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wether;
