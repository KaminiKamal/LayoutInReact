import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { updateDataList } from "./reducers/index";
import { toggleNavbarList } from "./reducers/updateNavbar";
import Routes from "./routes";
//import * as serviceWorker from "./serviceWorker";
const reducer = combineReducers({
  updateDataList: updateDataList,
  toggleNavbarList: toggleNavbarList
});
const store = createStore(reducer);
//const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
//serviceWorker.register();
