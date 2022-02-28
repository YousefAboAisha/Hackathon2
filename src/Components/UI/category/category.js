import React from "react";
import classes from "./category.module.css";
import Heading from "../heading/heading";
import { Link } from "react-router-dom";

const Categories = () => {
  const cards = [
    {
      brand: "https://img.icons8.com/doodle/65/000000/poultry-leg.png",
      title: "الدواجن",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "/",
    },
    {
      brand:
        "https://img.icons8.com/color/65/000000/ingredients-for-cooking.png",
      title: "الألبان والأجبان",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "/",
    },
    {
      brand: "https://img.icons8.com/color/65/000000/group-of-fruits.png",
      title: "الفواكه والخضروات",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "catagories/fruits",
    },
    {
      brand: "https://img.icons8.com/color/65/000000/hand-holding-needle.png",
      title: "المشغولات اليدوية",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "/",
    },
    {
      brand: "https://img.icons8.com/color/65/000000/paella.png",
      title: "الوجبات الخفيفة",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "/",
    },
    {
      brand: "https://img.icons8.com/color/65/000000/doughnut.png",
      title: "الحلويات",
      info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد.",
      link: "/",
    },
  ];

  return cards.map((card, index) => {
    return (
      <Link to={card.link}>
        <div className={classes.card} key={index}>
          <img src={card.brand} alt="img" />
          <span>{card.title}</span>
          <p>{card.info}</p>
        </div>
      </Link>
    );
  });
};

export default Categories;
