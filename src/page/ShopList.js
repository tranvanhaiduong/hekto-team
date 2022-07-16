import { Fragment } from "react";
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopListProduct from "../homehekto/ShopListProduct";
function ShopList() {
  return (
    <Fragment>
      <Navigation title="Shop List" name="Shop List" />
      <Search />
      <ShopListProduct />
      <Logo />
    </Fragment>
  );
}
export default ShopList;
