import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/images/images.jpeg";
const Logo = () => (
  <div className={css.Logo}>
    <img src={logoImage} />
    <a>ТЕРРОРИЗМТОЙ ТЭМЦЭХ ЗӨВЛӨЛ</a>
  </div>
);
export default Logo;
