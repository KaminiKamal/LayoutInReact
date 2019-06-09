import React from "react";
import MenuElement from "./MenuElement";
import { connect } from "react-redux";
import "./Menu.scss";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleMenu: `left-menu`
    };
  }
  //
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.showNavbar) {
      return (prevState.styleMenu = `left-menu-hide`);
    }
    if (nextProps.showNavbar) {
      return (prevState.styleMenu = `left-menu`);
    }
  }
  render() {
    return (
      <div className={this.state.styleMenu}>
        <div onClick={this.props.menuItemClicked}>
          {React.cloneElement(this.props.menuElements, {
            selectedIndex: this.props.selectedIndex
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  //console.log("mapStateToProps", state.toggleNavbarList, ownProps);
  return {
    showNavbar: state.toggleNavbarList
  };
};
//export default MenuBar;
export default connect(
  mapStateToProps,
  null
)(MenuBar);
