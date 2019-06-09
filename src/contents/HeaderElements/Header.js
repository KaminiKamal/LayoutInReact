import React from "react";
import styles from "./Header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as aioActions from "../../actions/index";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleNavBar = () => {
    this.props.toggleNavbar();
  };
  render() {
    //console.log("showNavbar", this.props.showNavbar);
    return (
      <div className="top-navbar">
        <div className="nav-items" onClick={this.toggleNavBar}>
          <i style={{ fontSize: "24px" }} className="fa">
            &#xf0c9;
          </i>
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

const mapDispatchToProps = dispatch => ({
  toggleNavbar: () => dispatch(aioActions.toggleNavbar())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
