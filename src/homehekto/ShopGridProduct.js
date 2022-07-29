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
    rows: 3,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 1,
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

            {shopgrid_product.map((product, index) =>
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

      </div>
    </div>
  );
}
export default ShopGridProduct;
