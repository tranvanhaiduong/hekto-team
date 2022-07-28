import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
import GridProduct from "./GridProduct";
import Slider from "react-slick";
import "react-toastify/dist/ReactToastify.css";
function ShopGridProduct({ toggleViewMode, change }) {
  const settings = {
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
  const shop_product =
    change === "Name"
      ? shopgrid_product.sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        )
      : shopgrid_product.sort((a, b) =>
          a.price > b.price ? 1 : a.price < b.price ? -1 : 0
        );
  return (
    <div className="contentShop__shopgrid">
      <div className="contentShop__shopgrid__listitem">
        <div id="shopgrid__mobile">
          <Slider {...settings}>
            {shop_product.map((product, index) =>
              product.pid.includes("sg") ? (
                <GridProduct
                  image={product.image}
                  title={product.title}
                  key={index}
                  price={product.price}
                  sale={product.sale}
                />
              ) : null
            )}
          </Slider>
        </div>
        <div id="shopgrid__pc">
          {shop_product.map((product, index) =>
            product.pid.includes("sg") ? (
              <GridProduct
                price={product.price}
                image={product.image}
                title={product.title}
                pid={product.pid}
                key={index}
                sale={product.sale}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
export default ShopGridProduct;
