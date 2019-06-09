import React, { Component } from "react";

export default class InnerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {React.cloneElement(this.props.content, {
          // selectedIndex: this.props.selectedIndex
        })}
      </div>
    );
  }
}
