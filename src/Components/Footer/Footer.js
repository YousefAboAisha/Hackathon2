import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a target="_blank" href="https://www.facebook.com/yousef.aboesha.9/">
        <i className="fab fa-facebook"></i>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a target="_blank" href="https://twitter.com/_abuAisha">
        <i className="fab fa-twitter"></i>
      </a>

      <a target="_blank" href="https://github.com/YousefAboAisha">
        <i className="fab fa-github"></i>
      </a>

      <span> © جميع الحقوق محفوظة لدى يوسف رشاد أبو عيشة </span>
    </div>
  );
};

export default Footer;
