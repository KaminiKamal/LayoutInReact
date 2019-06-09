import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default class MenuElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Link
          to={`/${this.props.item}`}
          
          index={this.props.index}
          className={this.props.active ? `active` : `inactive`}
        >
          {this.props.item}
        </Link>
      </div>
    );
  }
}
