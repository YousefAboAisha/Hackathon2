import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./signup.module.css";
import Heading from "../UI/heading/heading";
import Notistack from "../UI/Snackbar/snackbar";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { GlobalState } from "../../Context/globalState";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setUser, user } = useContext(GlobalState);

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log("Register Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      {snackbar ? <Notistack msg={"تم إنشاء الحساب بنجاح"} /> : null}

      <div className={classes.home}>
        <Heading
          title="إنشاء حساب جد يد"
          img="https://img.icons8.com/ios-filled/35/000000/add-user-male.png"
        />
        <div className={classes.input}>
          <input
            type="text"
            placeholder="الاسم الأول"
            required
            onChange={(e) => setFName(e.target.value)}
            value={fname}
            minLength={4}
          />
        </div>

        <div className={classes.input}>
          <input
            type="text"
            placeholder="اسم العائلة"
            required
            onChange={(e) => setLName(e.target.value)}
            value={lname}
            minLength={4}
          />
        </div>

        <div className={classes.input}>
          <input
            type="email"
            placeholder="البريد الالكتروني"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            minLength={13}
          />
        </div>

        <div className={classes.input}>
          <input
            type="password"
            placeholder="كلمة المرور"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength={4}
          />
        </div>
        {error ? <div className={classes.error}>{error}</div> : null}

        <button form="mainForm" onClick={signUp}>
          {loading ? " جارٍ  إنشاء الحساب ..." : " إنشاء حساب"}
        </button>

        <div className={classes.change}>
          <span>
            إذا كنت تمتلك حساباً يمكنك <Link to={"/signin"}>تسجيل الدخول</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
