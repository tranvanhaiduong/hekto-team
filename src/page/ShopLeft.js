import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopLeftSidebar from "../homehekto/ShopLeftSidebar";
import Logo from "../homehekto/Logo";
import { Fragment, useState } from "react";
function ShopLeft() {
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const [change, setChange] = useState("");
  return (
    <Fragment>
      <Navigation title="Shop Left Sidebar" name="Shop Left Sidebar" />
      <Search
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
        change={change}
        setChange={setChange}
      />
      <ShopLeftSidebar toggleViewMode={toggleViewMode} change={change} />
      <Logo />
    </Fragment>
  );
}
export default ShopLeft;
