import React from "react";
import classes from "./home.module.css";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/UI/modal/modal";
import Slider from "../../Components/Slider/slider";
import BestOffers from "../../Components/Best_offers/bestOffers";
import BestProducts from "../../Components/Best_products/bestProducts";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
          <div className={classes.img}>
            <img
              src="https://media.istockphoto.com/photos/beaded-dress-traditional-dress-for-sale-in-amman-jordan-picture-id962787832?b=1&k=20&m=962787832&s=170667a&w=0&h=Tw7kiwkIDrUeK7Nk3acdqwi0icRmV8JOeGIdID66uvA="
              alt="img"
            />
          </div>
          <div className={classes.img}>
            <img
              src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
              alt="img"
            />
          </div>
          <div className={classes.img}>
            <img src="https://cdn.pixabay.com/photo/2018/01/14/00/05/glass-3081015__340.jpg" />
          </div>
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

        <section>
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
        </section>
      </div>
      {/* <Comments /> */}
      <Footer />
      {/* <Modal /> */}
    </div>
  );
};

export default Home;
