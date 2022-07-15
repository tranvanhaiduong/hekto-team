import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
import GridProduct from "./GridProduct";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ShopGridProduct() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 1,
    responsive: [
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className="contentShop__shopgrid">
      <div className="contentShop__shopgrid__listitem">
        <div id="shopgrid__mobile">
          <Slider {...settings}>
            {shopgrid_product.map((product) => (
              product.pid.includes("sg")?
              <GridProduct image={product.image} title={product.title} />
              :null
            ))}
          </Slider>
        </div>
        <div id="shopgrid__pc">
          {shopgrid_product.map((product) => (
             product.pid.includes("sg")?
            <GridProduct
              price={product.price}
              image={product.image}
              title={product.title}
              pid={product.pid}
            />
            :null
          ))}
        </div>
      </div>
    </div>
  );
}
export default ShopGridProduct;
