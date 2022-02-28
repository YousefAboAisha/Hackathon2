import React, { useState } from "react";
import classes from "./formContainer.module.css";
import Form1 from "../form1/form1";
import Form2 from "../form2/form2";
import Form3 from "../form3/form3";
import Form4 from "../form4/form4";

const FormContainer = ({ stepper, totalPrice, productArr, setData }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  switch (stepper) {
    case 1: {
      return (
        <Form1
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
        />
      );
    }

    case 2: {
      return (
        <Form2
          card={card}
          setCard={setCard}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      );
    }

    case 3: {
      return (
        <Form3
          name={name}
          address={address}
          totalPrice={totalPrice}
          productArr={productArr}
          setData={setData}
        />
      );
    }

    default: {
      return <Form4 />;
    }
  }
};

export default FormContainer;
