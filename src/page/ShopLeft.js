import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";

function ShopLeft() {
  return (
    <div className="Shop_Left">
      <Header />
      <Navbar />
      <Navigation title="Shop Left Sidebar" name="Shop Left Sidebar" />
      <Search />
    </div>
  );
}
export default ShopLeft;
