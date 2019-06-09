import { ADMIN_MENU_ITEMS } from "../constants/constant";

export function updateDataList(state = {}, action) {
  // console.log("0000", action);
  var result = -1;
  // switch (action.type) {
  //   case "UPDATE_DATA_LIST":
  switch (action.dataList) {
    case ADMIN_MENU_ITEMS[0].url:
      console.log("0");
      result = 0;
      state = {
        pathIndex: 0
      };
      return state;
    case ADMIN_MENU_ITEMS[1].url:
      state = {
        pathIndex: 1
      };
      return state;
    case ADMIN_MENU_ITEMS[2].url:
      state = {
        pathIndex: 2
      };
      return state;
    // case ADMIN_MENU_ITEMS[3].url:
    //   result = 3;
    //   return 3;
    default:
      state = {
        pathIndex: 3
      };
      return state;
  }
  //return result;
  // const { dataList } = action;
  // console.log("inside reducer", dataList);
  // return dataList;
  // default:
  //   return result;
  // }
}
