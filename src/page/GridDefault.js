import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";
import Search from "../homehekto/Search";
import ShopGridProduct from "../homehekto/ShopGridProduct";
function GridDefault() {
  return (
    <div className="Shop_Grid">
      <Navigation title="Shop Grid Default" name="Shop Grid Default" />
      <Search />
      <ShopGridProduct />
    </div>
  );
}

export default GridDefault;
