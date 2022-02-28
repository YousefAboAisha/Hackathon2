import React from "react";
import classes from "./slider.module.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../Media/img11.jpg";
import img2 from "../../Media/img22.jpg";
import img4 from "../../Media/img44.jpg";

const Slider = () => {
  const photos = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img4,
    },
  ];

  return (
    <Carousel fade pause={false}>
      {photos.map((elem, index) => {
        return (
          <Carousel.Item interval={3800} key={index}>
            <img className="d-block w-100 " src={elem.src} alt="slide" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
