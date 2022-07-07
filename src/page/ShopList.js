import Footer from "../homehekto/Footer";
import Header from "../homehekto/Header";
import Logo from "../homehekto/Logo";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
function ShopList() {
  return (
    <div className="Shop_List">
      <Header />
      <Navbar />
      <Navigation title="Shop List" name="Shop List" />
      <Search />
      <Logo />
      <Footer />
    </div>
  );
}
export default ShopList;
