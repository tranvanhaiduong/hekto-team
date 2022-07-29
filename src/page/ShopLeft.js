import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
import ShopLeftSidebar from "../homehekto/ShopLeftSidebar";
import Logo from "../homehekto/Logo";
import { Fragment, useState } from "react";
function ShopLeft() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  return (
    <Fragment>
      <Navigation
        title="Shop Left Sidebar"
        name="Shop Left Sidebar"
        page="page"
      />
      <Search
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
      />
      <ShopLeftSidebar toggleViewMode={toggleViewMode} />
      <Logo />
    </Fragment>
  );
}
export default ShopLeft;
