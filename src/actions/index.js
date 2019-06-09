//import { FEEDLIST_LIST } from '../constants/constants.jsx';

export function updateData(dataList) {
  const action = {
    type: "UPDATE_DATA_LIST",
    dataList
  };
  return action;
}

export function toggleNavbar() {
  console.log("toggleNavbar");
  const action = {
    type: "TOGGLE_NAVBAR"
  };
  return action;
}
