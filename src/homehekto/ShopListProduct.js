import ListProduct from "./ListProduct";
import Slider from "react-slick";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";

function ShopListProduct({ toggleViewMode, change }) {
  const shoplist_product =
    change === "Name"
      ? shopgrid_product.sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        )
      : shopgrid_product.sort((a, b) =>
          a.price > b.price ? 1 : a.price < b.price ? -1 : 0
        );
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
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className="contentShop__shoplist" id="shoplist">
      <div id="shoplist__pc">
        {toggleViewMode === true ? (
          <div id="shoplist__list">

            {shoplist_product.map((list, index) =>
              list.pid.includes("sl") ? (
                <ListProduct
                  pid={list.pid}
                  image={list.image}
                  title={list.title}
                  colors={list.color}
                  price={list.price}
                  sale={list.sale}
                  ratings={list.rating}
                  description={list.description}
                  vectors={list.vector}
                  key={index}
                />
              ) : null
            )}
          </div>
        ) : (
          <div id="shoplist__grid">

            {shoplist_product.map((list, index) =>
              list.pid.includes("sl") ? (
                <ListProduct
                  pid={list.pid}
                  image={list.image}
                  title={list.title}
                  colors={list.color}
                  price={list.price}
                  sale={list.sale}
                  ratings={list.rating}
                  description={list.description}
                  vectors={list.vector}
                  key={index}
                />
              ) : null
            )}
          </div>
        )}
      </div>
      <div id="shoplist__mobile">
        <Slider {...settings}>

          {shoplist_product.map((list, index) =>

            list.pid.includes("sl") ? (
              <ListProduct
                pid={list.pid}
                image={list.image}
                title={list.title}
                colors={list.color}
                price={list.price}
                sale={list.sale}
                ratings={list.rating}
                description={list.description}
                vectors={list.vector}
                key={index}
              />
            ) : null
          )}
        </Slider>
      </div>
    </div>
  );
}
export default ShopListProduct;
