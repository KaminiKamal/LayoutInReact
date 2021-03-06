import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Button.scss";
//import "../../App.scss";

class Button extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["button"]),
    label: PropTypes.string,
    isRequired: PropTypes.oneOf([true, false]),
    updateFinalValue: PropTypes.func //
    //prop: PropTypes
  };
  static defaultProps = {
    addClass: `button-box-container`,
    type: "button",
    addInputStyle: "",
    label: "",
    isRequired: false
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateData() {
    //alert("hh");
    this.props.updateFinalValue();
  }
  render() {
    return (
      <div className={this.props.addClass}>
        <input
          type={this.props.type}
          className={this.props.addInputStyle}
          value={this.props.label}
          onClick={this.updateData.bind(this)}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default Button;
