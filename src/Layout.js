import React from "react";
import { ADMIN_MENU_ITEMS } from "./constants/constant.js";
//import Container from './Container';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as aioActions from "./actions/index";
import Button from "./contents/Components/Button/Button.js";
import CreateBox from "./contents/BodyElements/CreateBox.js";
//import TableView from './contents/BodyElements/TableElement/TableView.js';
import ViewTable from "./contents/BodyElements/BodyElement.js";
import ExportCSV from "./contents/BodyElements/ExportCSV/ExportCSVButton.js";
import InnerLayout from "./contents/BodyElements/InnerLayout.js";
import "./App.scss";

// function App() {
//   return <div>hello !!!</div>;
// }
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLayout: this.mountLayout(this.props.location.pathname),
      createItem: "hide",
      layoutStyle: "adjust-layout",
      hideItem: 1,
      updated: 0
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log("getDerivedStateFromProps");
    nextProps.updateData(nextProps.location.pathname);
    if (!nextProps.showNavbar) {
      prevState.layoutStyle = "customise-layout";
    }
    if (nextProps.showNavbar) {
      prevState.layoutStyle = "adjust-layout";
    }
    return prevState;
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.createItem !== this.state.createItem) {
      //console.log("componentDidUpdate");
      this.setState({
        selectedLayout: this.mountLayout(this.state.createItem)
      });
    }
    if (prevState.pathIndex !== this.state.pathIndex) {
      this.setState({ selectedLayout: this.mountLayout(this.state.pathIndex) });
    }
  }

  createItem = () => {
    this.setState({ createItem: "show" });
    console.log("create");
  };
  submitItem = e => {
    this.setState({ createItem: "hide" });
  };
  mountLayout(pathIndex) {
    let button = (
      <div>
        <Button
          type={"button"}
          label={"create"}
          isRequired={true}
          updateFinalValue={this.createItem}
        />
        <ViewTable {...this.props} />
      </div>
    );
    switch (pathIndex) {
      case "hide":
        return <InnerLayout content={button} />;
      case "/bnm":
        return <InnerLayout content={button} />;

      case "show":
        let createData = <CreateBox submitItem={this.submitItem} />;
        return <InnerLayout content={createData} />;

      default:
        let defaultLayout = <div>Layout...</div>;
        return <InnerLayout content={defaultLayout} />;
    }
  }

  render() {
    //console.log("render", this.state);
    return (
      <div className="layout-container">
        <div className={this.state.layoutStyle}>
          {this.state.selectedLayout}
        </div>
      </div>
    );
  }
}

//export default Layout;
const mapStateToProps = (state, ownProps) => {
  //console.log("mapStateToProps");
  return {
    pathIndex: state.pathIndex,
    showNavbar: state.toggleNavbarList
  };
};

const mapDispatchToProps = dispatch => ({
  updateData: dataList => dispatch(aioActions.updateData(dataList))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
