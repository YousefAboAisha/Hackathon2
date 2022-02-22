import React, { useEffect, useState } from "react";
import classes from "./bestOffers.module.css";
import Product from "../../Containers/../Components/UI/productCard/productCard";
import Heading from "../UI/heading/heading";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";

function BestOffers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://hackathon2-242f0-default-rtdb.firebaseio.com/Products/-MwNcX0-39d-sWSkKZgr.json"
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Heading
        title="أفضل العروض"
        img="https://img.icons8.com/glyph-neue/35/000000/sale-price-tag.png"
      />
      <div className={classes.cards}>
        {loading ? (
          <Spinner />
        ) : (
          products.map((elem, index) => {
            return <Product key={index} elem={elem} type={"product"} />;
          })
        )}
      </div>
    </>
  );
}

export default BestOffers;
