import React from "react";

import css from "./style.module.css";

import Menu from "../Menu";
// import Menu from "../Menu";

const Toolbar = () => (
  <header className={css.Toolbar}>
    <Menu />
  </header>
);

export default Toolbar;
