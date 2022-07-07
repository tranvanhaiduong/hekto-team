import Description from "../homehekto/Description";
import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import PlayWood from "../homehekto/PlayWood";
import Related from "../homehekto/Related";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";
function ProductDetails() {
  return (
    <div className="Product__Deatails">
      <Header />
      <Navbar />
      <Navigation title="Product Details" name="Product Details" />
      <PlayWood />
      <Description />
      <Related />
      <Logo />
      <Footer />
    </div>
  );
}
export default ProductDetails;
