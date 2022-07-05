import ContentShop from "../homehekto/ContentShop";
import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import Search from "../homehekto/Search";
function GridDefault() {
  return (
    <div className="Shop_Grid">
      <Header />
      <Navbar />
      <Navigation title="Shop Grid Default" name="Shop Grid Default" />
      <ContentShop />
    </div>
  );
}

export default GridDefault;
