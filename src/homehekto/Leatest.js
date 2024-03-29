import LeatestProducts from "./LeatestProducts";
import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
// import FeaturedProduct from "./FeaturedProdcuts";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
class Leatest extends React.Component {
  render() {
    const settings = {
      dots: false,

      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
          },
        },
        {
          breakpoint: 495,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    };

    return (
      <div className="content__leatest">
        <div className="content__leatest__products">
          <h1>Leatest Products</h1>
        </div>
        <div className="content__leatest__menu">
          <a className="a1" href="/#">
            New Arrival
          </a>
          <a href="/#">Best Seller</a>
          <a href="/#">Featured</a>
          <a href="/#">Special Offer</a>
        </div>
        <div className="content__leatest__slide">
          <div id="slider">
            <Slider {...settings}>
              {Array(2)
                .fill()
                .map(() =>
                  shopgrid_product.map((list, index) =>
                    list.pid.includes("lt") ? (
                      <LeatestProducts
                        image={list.image}
                        pid={list.pid}
                        title={list.title}
                        price={list.price}
                        sale={list.sale}
                        key={index}
                      />
                    ) : null
                  )
                )}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Leatest;
