import React, { useEffect, useState, useRef } from "react";
import classes from "./checkout.module.css";
import Notistack from "../../../Components/UI/Snackbar/snackbar";
import axios from "axios";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Heading from "../../../Components/UI/heading/heading";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const [code, setCode] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [chars, setChars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  useEffect(() => {
    let charNum = msg.length;
    setChars(charNum);
  }, [msg]);

  const clearInputs = () => {
    setName("");
    setMsg("");
    setChars(0);
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ProductType: productType,
      Name: name,
      Message: msg,
      Status: "جارٍ العمل عليها",
      Src: imageURL
        ? imageURL
        : "https://cdn.pixabay.com/photo/2019/12/27/08/36/page-not-found-4721931__340.png",
    };

    axios
      .post(
        "https://hackathon2-242f0-default-rtdb.firebaseio.com/Products.json",
        data
      )
      .then(
        (res) => {
          console.log(res.text);
          setLoading(false);
          setSnackbar(true);
          clearInputs();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadHandler(file);
  };

  const uploadHandler = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url);
          console.log("URL is =>", url);
        });
      }
    );
  };

  useEffect(() => {
    if (!file) {
      setError(true);
    } else {
      setError(false);
    }
  }, [file]);

  return (
    <div className={classes.wrapper}>
      {snackbar ? <Notistack msg={"تم إرسال الرسالة بنجاح !"} /> : null}

      <div className={classes.home}>
        <Heading
          title="إضافة مُنتج"
          img="https://img.icons8.com/bubbles/40/000000/form.png"
        />

        <form onSubmit={ClickHandler} id="mainForm" ref={form}>
          <div className={classes.input}>
            <select
              required
              onChange={(e) => setProductType(e.target.value)}
              value={productType}
              name="projectType"
            >
              <option hidden defaultValue>
                نوع المنتج
              </option>
              <option>مأكولات</option>
              <option>مشغولات يدوية </option>
              <option>تراث فلسطيني </option>
              <option> غير ذلك</option>
            </select>
          </div>

          <div className={classes.input}>
            <input
              type="text"
              placeholder="اسم المنتج"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              minLength={4}
              maxLength={16}
              name="name"
            />
          </div>

          <div className={classes.input}>
            <input
              type="number"
              placeholder="السعر"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
            />
          </div>

          <div className={classes.input}>
            <input
              type="text"
              placeholder="كود الخصم"
              required
              onChange={(e) => setCode(e.target.value)}
              value={code}
              name="copon"
              minLength={6}
              maxLength={6}
            />
          </div>

          <div className={classes.input}>
            <textarea
              required
              placeholder="تفاصيل المنتج"
              cols={20}
              rows={10}
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              name="msg"
            ></textarea>
            <div className={classes.chars}>{chars}</div>
          </div>
        </form>

        <form onSubmit={formHandler}>
          <div className={classes.input}>
            <label>قم بإرفاق صورة </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.value)}
              value={file}
            />
            {error ? (
              <span className={classes.error}>
                الرجاء إرفاق صورة، حتى يتم رفعها !
              </span>
            ) : null}
            <button type="submit">رفع الصورة </button>

            {imageURL ? (
              <span style={{ color: "green" }}> تم رفع الملف بنجاح ! </span>
            ) : (
              <span>تم رفع % {progress}</span>
            )}
          </div>
        </form>

        <button
          form="mainForm"
          disabled={imageURL && productType !== "" ? false : true}
        >
          {loading ? " جارٍ الإبلاغ ..." : " إبلاغ"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
