import React from "react";

import css from "./style.module.css";
import MenuDataProvider from "../DataProvider";
import MenuDisplay from "../DataDisplay";
// import Menu from "../Menu";

const Menu = () => (
  <div>
    <MenuDataProvider
      active
      link="/"
      endpoint="http://localhost:8000/api/?format=json"
      render={(data) => (
        <div>
          <MenuDisplay active link="/" data={data} />
        </div>
      )}
    />
  </div>
);

export default Menu;
