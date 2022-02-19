import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./signin.module.css";
import axios from "axios";
import Heading from "../UI/heading/heading";
import Notistack from "../UI/Snackbar/snackbar";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("User: ", user);
      setUser(user);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className={classes.wrapper}>
      {snackbar ? <Notistack msg={"تم إرسال الرسالة بنجاح !"} /> : null}

      <div className={classes.home}>
        <Heading
          title="تسجيل الدخول"
          img="https://img.icons8.com/ios/40/000000/user.png"
        />
        <div className={classes.input}>
          <input
            type="email"
            placeholder="البريد الالكتروني"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            minLength={13}
            name="email"
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
            name="password"
          />
        </div>

        {error ? <div className={classes.error}>{error}</div> : null}

        <button onClick={login}>
          {loading ? " جارٍ تسجيل الدخول ..." : " تسجل الدخول"}
        </button>
        <div className={classes.change}>
          <span>
            إذا كنت لا تمتلك حساباً يمكنك{" "}
            <Link to={"/signup"}>إنشاء حساب جديد</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
