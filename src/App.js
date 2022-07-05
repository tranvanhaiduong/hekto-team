import "./App.scss";
import Home from "./page/Home";
import GridDefault from "./page/GridDefault";
import { Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/shop" element={<GridDefault />} />
    </Routes>
  );
}

export default App;
