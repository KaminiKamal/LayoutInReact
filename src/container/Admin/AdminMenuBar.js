import React from "react";
import MenuElement from "../../contents/MenuElements/MenuElement";

import { ADMIN_MENU_ITEMS } from "../../constants/constant.js";

class AdminMenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menuList = ADMIN_MENU_ITEMS;
    return (
      <div>
        {menuList.map((menu, ind) => (
          <MenuElement
            key={ind}
            index={ind}
            item={menu.name}
            icon={menu.icon}
            active={this.props.selectedIndex === ind ? true : false}
          />
        ))}
      </div>
    );
  }
}

export default AdminMenuBar;
