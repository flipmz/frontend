import React from "react";
import css from "./style.module.css";

class Recursive extends React.Component {
  render() {
    let childitems = null;
    if (this.props.children) {
      childitems = this.props.children.map(function (childitem) {
        return <Recursive item={childitem} children={childitem.children} />;
      });
    }
    return (
      <li key={this.props.item.id}>
        {this.props.item.name}
        {childitems ? <ul>{childitems}</ul> : null}
      </li>
    );
  }
}

class MenuDisplay extends React.Component {
  render() {
    let items = this.props.data.map(function (item) {
      return (
        <div>
          <Recursive item={item} children={item.children} />
        </div>
      );
    });
    return (
      <div>
        <a className={css.Menu}>{items}</a>
      </div>
    );
  }
}
export default MenuDisplay;
