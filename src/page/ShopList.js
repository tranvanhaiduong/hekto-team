import { Fragment, useState } from "react";
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopListProduct from "../homehekto/ShopListProduct";
function ShopList() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  
  return (
    <Fragment>
      <Navigation title="Shop List" name="Shop List" />
      <Search toggleViewMode={toggleViewMode} setToggleViewMode={setToggleViewMode}/>
      <ShopListProduct toggleViewMode={toggleViewMode}/>
      <Logo />
    </Fragment>
  );
}
export default ShopList;
