import { Fragment, useState } from "react";
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopListProduct from "../homehekto/ShopListProduct";
function ShopList() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [change, setChange] = useState("");
  return (
    <Fragment>
      <Navigation title="Shop List" name="Shop List" />
      <Search
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
        change={change}
        setChange={setChange}
      />
      <ShopListProduct toggleViewMode={toggleViewMode} change={change} />
      <Logo />
    </Fragment>
  );
}
export default ShopList;
