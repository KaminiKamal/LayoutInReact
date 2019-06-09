import React, { useState, useEffect } from "react";
import { FETCH_TARGET_RESIDUE_TYPE } from "../../constants/constant.js";
import TableView from "./TableElement/TableView.js";

const ViewTable = dataList => {
  const [listItem, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(FETCH_TARGET_RESIDUE_TYPE).then(res =>
        res.json()
      );
      setItemList(response);
    }
    fetchData();
  }, []);

  console.log("result", listItem);

  return (
    <div>
      <h1>List of elements</h1>
      <TableView />
    </div>
  );
};
export default ViewTable;
