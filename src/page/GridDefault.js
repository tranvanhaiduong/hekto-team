// import Header from "../homehekto/Header";
// import Navbar from "../homehekto/Navbar";
import { useState } from "react";
import Navigation from "../homehekto/Navigation";
// import Logo from "../homehekto/Logo";
// import Footer from "../homehekto/Footer";
import Search from "../homehekto/Search";
import ShopGridProduct from "../homehekto/ShopGridProduct";
function GridDefault() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [change, setChange] = useState("");
  return (
    <div className="Shop_Grid">

      <Navigation title="Shop Grid Default" name="Shop Grid Default" />
      <Search
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
        change={change}
        setChange={setChange}
      />
      <ShopGridProduct toggleViewMode={toggleViewMode} change={change} />

    </div>
  );
}

export default GridDefault;
