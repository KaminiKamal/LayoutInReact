export function toggleNavbarList(state = true, action) {
  // console.log("toggleNavbarList");
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      let navbar = !state;
      console.log("toggleNavbar", navbar);
      return (state = navbar);

    default:
      return state;
  }
}
