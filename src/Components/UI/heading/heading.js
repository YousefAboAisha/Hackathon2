import React from "react";
import classes from "./heading.module.css";

const Heading = ({ title, img }) => {
  return (
    <div className={classes.heading}>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
