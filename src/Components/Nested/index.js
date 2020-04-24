import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { ReactNestedMenu } from "react-nested-menu";

class Nested extends Component {
  linkTransformer = (menuItem) => {
    return <Link to={menuItem.url}>{menuItem.title}</Link>;
  };

  render() {
    const menu = [
      {
        id: 23,
        name: "ТАНИЛЦУУЛГА",
        parent: null,
        children: [
          {
            id: 31,
            name: "ЗӨВЛӨЛИЙН ГИШҮҮД",
            parent: 23,
            children: [],
          },
          {
            id: 32,
            name: "ДАРГЫН МЭНДЧИЛГЭЭ",
            parent: 23,
            children: [],
          },
        ],
      },
      {
        id: 24,
        name: "ХУУЛЬ ЭРХ ЗҮЙ",
        parent: null,
        children: [
          {
            id: 33,
            name: "ХУУЛЬ ТОГТООМЖ",
            parent: 24,
            children: [
              {
                id: 34,
                name: "ТЕРРОРИЗМЫН ТУХАЙ ХУУЛЬ",
                parent: 33,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 25,
        name: "МЭДЭЭ МЭДЭЭЛЭЛ",
        parent: null,
        children: [
          {
            id: 36,
            name: "ГАДААД ДОТООД МЭДЭЭ",
            parent: 25,
            children: [],
          },
          {
            id: 37,
            name: "СУРГАЛТ, ДАДЛАГА",
            parent: 25,
            children: [],
          },
          {
            id: 38,
            name: "ДҮРС БИЧЛЭГ",
            parent: 25,
            children: [],
          },
        ],
      },
      {
        id: 26,
        name: "ДҮН ШИНЖИЛГЭЭ",
        parent: null,
        children: [],
      },
      {
        id: 27,
        name: "ТЕРРОРИЗМЫН НӨХЦӨЛ БАЙДАЛ",
        parent: null,
        children: [],
      },
      {
        id: 28,
        name: "ХОРИГ АРГА ХЭМЖЭЭ",
        parent: null,
        children: [
          {
            id: 35,
            name: "2020 ОНД ТУНХАГЛСАН ХОРИГ АРГА ХЭМЖЭЭ",
            parent: 28,
            children: [],
          },
        ],
      },
      {
        id: 29,
        name: "САЛБАР ЗӨВЛӨЛ",
        parent: null,
        children: [],
      },
      {
        id: 30,
        name: "ХОЛБОО БАРИХ",
        parent: null,
        children: [],
      },
      {
        id: 39,
        name: "МУ-ЫН ТЕРРОРИЗМЫН НӨХЦӨЛ БАЙДАЛ",
        parent: null,
        children: [],
      },
    ];

    return (
      <div className="App">
        <ReactNestedMenu
          navParentClassname="vertical menu nested"
          navTopLevelParentClassname="vertical menu"
          navChildClassname="child"
          linkTransformer={this.linkTransformer}
          menuData={menu}
        />
      </div>
    );
  }
}

ReactDOM.render(<Nested />, document.getElementById("root"));
