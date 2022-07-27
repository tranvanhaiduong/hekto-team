import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
import Discount from "./Discount";
import Featured from "./Featured";
import Leatest from "./Leatest";
import Leatestblg from "./Leatestblg";
import Logo from "./Logo";
import Newslater from "./Newslater";
import Shopex from "./Shopex";
import Top from "./Top";
import Trending from "./Trending";
import Unique from "./Unique";

function Content() {
  return (
    <div className="content">
      <Featured />
      <Leatest />
      <Shopex />
      {shopgrid_product.map((list,index) => (
        list.pid.includes("unique")?
        <Unique
          pid={list.pid}
          image={list.image}
          title={list.title}
          listImage={list.listImage}
          description={list.description}
          nameProduct={list.name}
          price={list.price}
          key={index}
        />
        :null
      ))}
      <Trending />
      {shopgrid_product.map((list,index) => (
        list.pid.includes("discount")?
      <Discount 
      pid={list.pid}
      image={list.image}
      key={index}
      title={list.title}
      listImage={list.listImage}
      description={list.description}
      nameProduct={list.name}
      price={list.price}/>
      :null
      ))}
      <Top />
      <Newslater />
      <Logo />
      <Leatestblg />
    </div>
  );
}
export default Content;
