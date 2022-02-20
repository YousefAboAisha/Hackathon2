import React from "react";
import classes from "./slider.module.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../Media/img11.jpg";
import img2 from "../../Media/img22.jpg";
import img3 from "../../Media/img33.jpg";

const Slider = () => {
  const photos = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
  ];

  return (
    <Carousel fade pause={false}>
      {photos.map((elem, index) => {
        return (
          <Carousel.Item interval={3800} key={index}>
            <img className="d-block w-100 " src={elem.src} alt="slide" />
            <div className={classes.box}>
              <h2>
                مرحباً بك في <span>متجرنا</span>
              </h2>
              <p>
                {" "}
                حيث الجودة والأسعار المناسبة والحملات التسويقية تجدها كلها في
                مكان واحد
              </p>
              <div className={classes.input}>
                <i class="fas fa-search"></i>
                <input type={"text"} placeholder={"ابحث هنا ..."} />
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
