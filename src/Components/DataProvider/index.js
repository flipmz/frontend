import React from "react";
import css from "./style.module.css";
import * as ReactBootStrap from "react-bootstrap";

class MenuDataProvider extends React.Component {
  state = {
    data: [],
    loaded: false,
    placeholder: "loading...",
  };
  componentDidMount() {
    // fetch(this.props.endpoint)
    fetch(this.props.endpoint)
      .then((response) => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then((data) => this.setState({ data: data, loaded: true }));
  }
  render() {
    const { loaded, data, placeholder } = this.state;
    return (
      <div>
        <li className={CSS.MenuItem}>
          <a
            className={this.props.active ? css.active : null}
            href={this.props.link}
          >
            {loaded ? this.props.render(data) : <p>{placeholder}</p>}
          </a>
        </li>
      </div>
    );
  }
}

export default MenuDataProvider;
