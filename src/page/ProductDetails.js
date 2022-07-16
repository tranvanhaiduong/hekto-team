import Description from "../homehekto/Description";
import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import PlayWood from "../homehekto/PlayWood";
import Related from "../homehekto/Related";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";
import { useParams } from "react-router-dom";
import productData from "../fake -data/fakedata-shopgrid";
import shopleftdata from "../fake -data/fakedata-shopleft";
import shoplistdata from "../fake -data/fakedata-shoplist";
function ProductDetails() {
  const { pid } = useParams();
  console.log(pid);
  const product = pid.includes("sg")
    ? productData.getById(pid)
    : pid.includes("sl")
    ? shoplistdata.getById(pid)
    : shopleftdata.getById(pid);
  return (
    <div className="Product__Deatails">
      <Navigation title="Product Details" name="Product Details" />
      <PlayWood
        image={product.image}
        title={product.title}
        pid={product.pid}
        price={product.price}
      />
      <Description />
      <Related />
      <Logo />
    </div>
  );
}
export default ProductDetails;
