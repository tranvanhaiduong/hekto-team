import { Routes, Route } from "react-router-dom";
//Components
import Home from "../page/Home";
import GridDefault from "../page/GridDefault";
import ShoppingCurt from "../page/ShoppingCurt";
import OrderCompleted from "../page/OrderCompleted";
import RegisterAccount from "../page/RegisterAccount";
import Error from "../page/Error";
import About from "../page/About";
import ShopList from "../page/ShopList";
import ShopLeft from "../page/ShopLeft";
import ProductDetails from "../page/ProductDetails";
import FAQ from "../page/FAQ";
import Contact from "../page/Contact";
import SingleBlock from "../page/SingleBlog";
import MyAccount from "../page/MyAccount";
import BlogPage from "../page/BlogPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/ordercompleted" element={<OrderCompleted />} />
      <Route path="/registeraccount" element={<RegisterAccount />} />
      <Route path="/product" element={<GridDefault />} />
      <Route path="/*" element={<Error />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleblock" element={<SingleBlock />} />
      <Route path="/shoplist" element={<ShopList />} />
      <Route path="/page" element={<ShopLeft />} />
      <Route path="/product/:pid" element={<ProductDetails />} />
      <Route path="/ShoppingCurt" element={<ShoppingCurt />} />
      <Route path="/login" element={<MyAccount />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default Main;
