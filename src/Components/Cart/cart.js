import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobalState } from "../../Context/globalState";
import classes from "./cart.module.css";
import Heading from "../UI/heading/heading";
import ProductsCart from "../UI/productsCart/productsCart";
import FormContainer from "../validationForm/formContainer/formContainer";
import { useNavigate } from "react-router";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";

const Cart = () => {
  const { cart } = useContext(GlobalState);
  const [stepper, setStepper] = useState(1);
  const navigate = useNavigate();
  const [productArr, setProductArr] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const myRef = useRef();

  const next = () => {
    setStepper(stepper + 1);
  };

  const previous = () => {
    setStepper(stepper - 1);
  };

  const openHandler = () => {
    setOpen(true);
    setTimeout(() => {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const confirmPayment = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://hackathon2-242f0-default-rtdb.firebaseio.com/Orders.json",
        data
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStepper(stepper + 1);
        setTimeout(() => {
          navigate("/orders");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  let fixedPrice = totalPrice.toFixed(2);
  const priceAfterDiscount = (fixedPrice - (fixedPrice * 23) / 100).toFixed(2);

  return (
    <div className={classes.box}>
      <div className={classes.favorite}>
        <div className={classes.header}>
          <Heading title={"سلة المشتريات"} />
        </div>
        {cart.length !== 0 ? (
          cart.map((card, index) => {
            return (
              <ProductsCart
                card={card}
                key={index}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setProductArr={setProductArr}
                productArr={productArr}
              />
            );
          })
        ) : (
          <h2>قم بإضافة بعض المنتجات إلى السلة</h2>
        )}
      </div>

      <div className={classes.totalPrice}>
        <div>
          <span>السعر الإجمالي</span>
          <span>$ {fixedPrice}</span>
        </div>
        <div>
          <span>نسبة الخصم</span>
          <span>% 23</span>
        </div>
        <div>
          <span>السعر بعد الخصم</span>
          <span>$ {priceAfterDiscount}</span>
        </div>

        <button onClick={openHandler}>شراء الآن</button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        open && (
          <div className={classes.stepper} ref={myRef}>
            <FormContainer
              stepper={stepper}
              productArr={productArr}
              totalPrice={priceAfterDiscount}
              setData={setData}
            />
            <div className={classes.btns}>
              {stepper >= 3 ? (
                stepper === 4 ? null : (
                  <button onClick={confirmPayment}>تأكيد العملية</button>
                )
              ) : (
                <button onClick={next}> التالي </button>
              )}
              <button onClick={previous} disabled={stepper <= 1 && true}>
                السابق
              </button>
            </div>
            <div className={classes.steps}>
              <span> الخطوة {stepper} من 4 </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
