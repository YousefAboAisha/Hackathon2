import React, { useEffect } from "react";
import classes from "./home.module.css";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/slider";
import BestOffers from "../../Components/Best_offers/bestOffers";
import BestProducts from "../../Components/Best_products/bestProducts";
import Categories from "../../Components/UI/category/category";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.home}>
        <Slider />
      </div>

      <div className={classes.container}>
        <div className={classes.brands}>
          <img
            src="https://img.icons8.com/color/65/000000/burger-king-logo.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/color/65/000000/starbucks.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/color/65/000000/mcdonalds.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/color/65/000000/dunkin-donuts.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/color/65/000000/pizza-five-eighths.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/color/65/000000/organic-food.png"
            alt="brand"
          />
          <img
            src="https://img.icons8.com/cotton/65/000000/fast-food--v2.png"
            alt="brand"
          />
        </div>
        <div className={classes.trending}>
          <Categories />
        </div>

        <section>
          <BestOffers />
        </section>

        <section>
          <BestProducts />
        </section>

        {/* <section>
          <Heading title="سياسة التوصيل" />
          <div className={classes.box}>
            <div className={classes.left}>
              <h4>سياسة التوصيل</h4>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى
              </p>
              <div className={classes.icons}>
                <img src="https://img.icons8.com/color/38/000000/privacy-policy.png" />
                <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/38/000000/external-call-center-communication-xnimrodx-lineal-color-xnimrodx-2.png" />
                <img src="https://img.icons8.com/color/38/000000/ringing-phone.png" />
                <img src="https://img.icons8.com/fluency/38/000000/delivery-scooter.png" />
              </div>
              <div className={classes.innerBox}>
                <div className={classes.right}>
                  <h5>نص تلقائي</h5>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                  </p>
                </div>
                <div className={classes.left}>
                  <h5>نص تلقائي</h5>
                  <ul>
                    <li>النص هو مثال النص يمكن </li>
                    <li>النص هو مثال النص يمكن</li>
                    <li>النص هو مثال النص يمكن </li>
                    <li>النص هو مثال النص يمكن </li>
                  </ul>
                </div>
              </div>
              <button>اعرف المزيد</button>
            </div>
            <div className={classes.right}>
              <img
                src="https://cdn.pixabay.com/photo/2015/07/31/22/12/phone-869669__340.jpg"
                alt="img"
              />
            </div>
          </div>
        </section> */}

        <div className={classes.ads}>
          <div className={classes.text}>
            <h3>ابقَ على تواصلٍ معنا !</h3>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى
            </p>
          </div>
          <div className={classes.input}>
            <input type={"email"} placeholder="البريد الالكتروني" />
            <i className="fas fa-envelope"></i>
            <button>اشتراك</button>
          </div>
        </div>
      </div>
      {/* <Comments /> */}
      <Footer />
      {/* <Modal /> */}
    </div>
  );
};

export default Home;
