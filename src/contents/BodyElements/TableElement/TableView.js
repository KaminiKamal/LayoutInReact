import React, { Component } from "react";
import "./TableView.css";
import moment from "moment";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table-next";
var products = [
  {
    id: 1,
    name: "Item name 1",
    price: 100
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100
  },
  {
    id: 1,
    name: "Item name 1",
    price: 100
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100
  },
  {
    id: 1,
    name: "Item name 1",
    price: 100
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100
  },
  {
    id: 1,
    name: "Item name 1",
    price: 100
  },
  {
    id: 2,
    name: "Item name 2",
    price: 100
  }
];

// It's a data format example.
function priceFormatter(cell, row) {
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BootstrapTable
          data={products}
          dataSort={true}
          exportCSV
          csvFileName={
            "ProductDetails" +
            " - Total Opens - " +
            String(moment().unix()) +
            ".csv"
          }
          striped={true}
          hover={true}
          ref="table"
          search={false}
          hover
        >
          <TableHeaderColumn
            isKey
            dataField="id"
            width="100px"
            dataSort={true}
            striped={true}
          >
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" width="200px" dataSort={true}>
            Product Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price" width="100px" dataSort={true}>
            Product Price
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default TableView;
