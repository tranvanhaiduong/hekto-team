import "./App.scss";
import Home from "./page/Home";
import GridDefault from "./page/GridDefault";
import Error from "./page/Error";
import About from "./page/About";
import ShopList from "./page/ShopList";
import ShopLeft from "./page/ShopLeft";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./page/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/Featured.scss";
import "./scss/Header.scss";
import "./scss/Navbar.scss";
import "./scss/Slide.scss";
import "./scss/Content.scss";
import "./scss/Leatest.scss";
import "./scss/Shopex.scss";
import "./scss/Unique.scss";
import "./scss/Trending.scss";
import "./scss/Discount.scss";
import "./scss/Top.scss";
import "./scss/Newslater.scss";
import "./scss/Logo.scss";
import "./scss/Leatestblg.scss";
import "./scss/Footer.scss";
import "./scss/Navigation.scss";
import "./scss/ContentShop.scss";
import "./scss/Search.scss";
import "./scss/Error.scss"
import "./scss/About.scss"
import "./scss/FAQ.scss"
import "./scss/Contact.scss"
import "./scss/SingleBlog.scss"
import "./scss/ContentSingleLeft.scss"
import "./scss/ContentSingleRight.scss"
import FAQ from "./page/FAQ";
import Contact from "./page/Contact";
import SingleBlock from "./page/SingleBlog";

import "./scss/PlayWood.scss";
import "./scss/Description.scss";
import "./scss/Related.scss";
import "./scss/ShopGridProduct.scss";
import "./scss/ShopList.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/shop" element={<GridDefault />} />
      <Route path="/error" element={<Error/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleblock" element={<SingleBlock/>}/>
      <Route path="/shoplist" element={<ShopList />} />
      <Route path="/shopleft" element={<ShopLeft />} />
      <Route path="/products" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
