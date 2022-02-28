import React, { useState, useEffect } from "react";
import classes from "./fruits.module.css";
import Heading from "../../../Components/UI/heading/heading";
import axios from "axios";
import Product from "../../../Components/UI/productCard/productCard";
import Spinner from "../../../Components/UI/Spinner/spinner";

const Fruits = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const arr = [
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 35,
      id: 1,
      info: "هذا النص هو مثال لنص",
      name: "ستيك بلحم العجل",
      price: "59.15",
      quantity: 1,
      rate: 4,
      src: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg",
    },
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 33,
      id: 2,
      info: "هذا النص هو مثال لنص",
      name: "فطائر الجبن",
      price: "10.45",
      quantity: 1,
      rate: 4,
      src: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459__340.jpg",
    },
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 24,
      id: 3,
      info: "هذا النص هو مثال لنص",
      name: "فطيرة التين",
      price: "71.65",
      quantity: 1,
      rate: 5,
      src: "https://cdn.pixabay.com/photo/2015/12/30/11/57/fruits-1114060__340.jpg",
    },
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 24,
      id: 3,
      info: "هذا النص هو مثال لنص",
      name: "فطيرة التين",
      price: "71.65",
      quantity: 1,
      rate: 5,
      src: "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg",
    },
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 24,
      id: 3,
      info: "هذا النص هو مثال لنص",
      name: "فطيرة التين",
      price: "71.65",
      quantity: 1,
      rate: 5,
      src: "https://cdn.pixabay.com/photo/2018/07/03/10/47/blueberries-3513547__340.jpg",
    },
    {
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      discount: 24,
      id: 3,
      info: "هذا النص هو مثال لنص",
      name: "فطيرة التين",
      price: "71.65",
      quantity: 1,
      rate: 5,
      src: "https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697__340.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(JSON.stringify(products));

  return (
    <div className={classes.box}>
      <>
        <Heading title="الخضروات والفواكه" />

        <div className={classes.cards}>
          {arr.map((elem, index) => {
            return <Product key={index} elem={elem} />;
          })}
        </div>
      </>
    </div>
  );
};

export default Fruits;
