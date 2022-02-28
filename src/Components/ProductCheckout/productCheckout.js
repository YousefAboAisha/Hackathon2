import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Context/globalState";
import classes from "./productCheckout.module.css";
import Stars from "../UI/Stars/stars";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";

const ProductCheckout = () => {
  const { id, addProductToCart } = useContext(GlobalState);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [available, setAvailable] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://hackathon2-242f0-default-rtdb.firebaseio.com/Products/-MwNcX0-39d-sWSkKZgr.json"
      )
      .then((res) => {
        const fetchedData = res.data;
        const arr = [];
        for (let product in fetchedData) {
          arr.push(fetchedData[product]);
        }
        setData(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);

  const navigate = useNavigate();

  const clickHandler = (elem) => {
    navigate("/cart");
    addProductToCart(elem);
  };

  console.log(count);

  useEffect(() => {
    setAvailable(Math.floor(Math.random() * 20) + 5);
  }, []);

  const product = data[id - 1];

  return (
    <div className={classes.checkout}>
      {product ? (
        <div className={classes.offer}>
          <div className={classes.left}>
            <h3>{product.name}</h3>

            <div> {product.info}</div>

            <div className={classes.rating}>
              <Stars rate={product.rate} /> (4.9 من 100)
            </div>

            <p>{product.description}</p>

            <span> $ {product.price}</span>

            {/* <div className={classes.quantity}>
              <button
                onClick={inc}
                disabled={count >= available ? true : false}
              >
                <i className="fas fa-plus-circle"></i>
              </button>
              <span>{count}</span>
              <button disabled={count <= 1 ? true : false} onClick={dec}>
                <i className="fas fa-minus-circle"></i>
              </button>
            </div>

            <div className={classes.available}>
              <span>الكمية المتاحة :</span>
              <span>{available}</span>
            </div> */}

            <button
              className={classes.btn}
              onClick={() => clickHandler(product)}
            >
              إضافة إلى السلة
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
          <div className={classes.right}>
            <img
              src={
                product.src
                  ? product.src
                  : "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
              }
              alt="product"
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      {/* <div className={classes.productInfo}>
        <h5>تفاصيل المنتج</h5>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.هذا النص هو مثال لنص
          يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
          إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد
          أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
          النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي
          المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع
          على صورة حقيقية لتصميم الموقع.
        </p>
      </div> */}
      <Footer />
    </div>
  );
};

export default ProductCheckout;
