import React, { useState } from "react";
import classes from "./messenger.module.css";
import Spinner from "../UI/Spinner/spinner";

const Wether = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <a href="https://wa.me/+970592551405" target={"_blank"}>
        <div className={classes.toggle} title="Show forcast info">
          <img
            src="https://img.icons8.com/color/50/000000/whatsapp--v1.png"
            onClick={() => setOpen(!open)}
          />
        </div>
      </a>

      {/* <div
        className={classes.box}
        style={{
          opacity: open ? "1" : "0",
          visibility: open ? "visible" : "hidden",
        }}
      >
        <i class="far fa-times-circle" onClick={() => setOpen(!open)}></i>
      </div> */}
    </>
  );
};

export default Wether;
