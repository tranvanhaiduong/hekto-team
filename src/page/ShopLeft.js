import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopLeftSidebar from "../homehekto/ShopLeftSidebar";
import Logo from "../homehekto/Logo";
import { Fragment } from "react";
function ShopLeft() {
  return (
    <Fragment>
      <Navigation title="Shop Left Sidebar" name="Shop Left Sidebar" />
      <Search />
      <ShopLeftSidebar />
      <Logo />
    </Fragment>
  );
}
export default ShopLeft;
