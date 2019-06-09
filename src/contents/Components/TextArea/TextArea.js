import React, { Component } from "react";
import "../Input/InputBox.scss";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class TextArea extends Component {
  static propTypes = {
    type: PropTypes.oneOf(["text", "number"]),
    label: PropTypes.string,
    isRequired: PropTypes.oneOf([true, false]),
    updateValue: PropTypes.func
    //prop: PropTypes
  };
  static defaultProps = {
    type: "text",
    isRequired: false,
    addInputStyle: "input-box",
    addClass: "input-box-container"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.addClass}>
        <label>
          <span className="mandatory-label">
            {this.props.isRequired ? `*` : null}
          </span>
          {this.props.label}
        </label>
        <div
          contentEditable={true}
          ref="textarea"
          style={{ width: "200px", height: "100px" }}
          onBlur={this.props.updateValue}
          className={this.props.addInputStyle}
          onBlur={this.props.updateValue}
        />
      </div>
    );
  }
}
export default TextArea;
