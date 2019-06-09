import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Route, IndexRoute } from "react-router";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
import HomePage from "./HomePage.js";
import App from "./App.js";
import AdminPortal from "./AdminPortal.js";
import Layout from "./Layout.js";
import MenuBar from "./contents/MenuElements/MenuBar.js";
import MenuElement from "./contents/MenuElements/MenuElement.js";
//import _ from "lodash";
import Header from "./contents/HeaderElements/Header.js";
import AdminMenuBar from "./container/Admin/AdminMenuBar";
import { ADMIN_MENU_ITEMS } from "./constants/constant.js";

import "./App.scss";

const DefaultLayout = ({
  component: Component,
  adminMenuBar: adminMenuBar,
  ...rest
}) => {
  // console.log(9, rest);
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="container-box">
          <Header />
          {/* <DocumentTitle title="Sahaj - Impact Management" /> */}
          <div className="mis-csr">
            <MenuBar
              menuElements={adminMenuBar}
              selectedIndex={rest.selectedIndex}
              menuItemClicked={rest.menuItemClicked}
            />
            <Component {...matchProps} {...rest} />
          </div>
        </div>
      )}
    />
  );
};
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
      path: ADMIN_MENU_ITEMS
    };
  }
  menuItemClicked(e) {
    this.setState({
      selectedIndex: Number(
        ReactDOM.findDOMNode(e.target).getAttribute("index")
      )
    });
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          {this.state.path.map((el, i) => (
            <DefaultLayout
              exact
              path={el.url}
              component={Layout}
              selectedIndex={this.state.selectedIndex}
              adminMenuBar={<AdminMenuBar />}
              menuItemClicked={this.menuItemClicked.bind(this)}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
