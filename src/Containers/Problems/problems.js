import React, { useEffect } from "react";
import classes from "./problems.module.css";
import Footer from "../../Components/Footer/Footer";
import Checkout from "./checkout/checkout";
import Video from "../../Components/video/video";
import vid from "../../Media/problemsBackground.mp4";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <Video
          vid={vid}
          text={"مرحباً بك في صفحة البلاغات"}
          btn={"إبلاغ الآن"}
        />
      </div>

      <div className={classes.container}>
        <section>
          <Checkout />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
