import ShopexOffer from "./ShopexOffer";
import React from "react";
import Slider from "react-slick";
import productData, { shopgrid_product } from "../fake -data/fakedata-shopgrid";
class Shopex extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1,
          },
        },
      ],
    };
    return (
      <div className="content__shopex">
        <div className="content__shopex__offer">
          <h1>What Shopex Offer!</h1>
        </div>
        <div className="content__shopex__support">
          <div id="shopex__mobile">
            <Slider {...settings}>
              {shopgrid_product.map((list) =>
                list.pid.includes("so") ? (
                  <ShopexOffer
                    pid={list.pid}
                    image={list.image}
                    title={list.title}
                    description={list.description}
                  />
                ) : null
              )}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Shopex;
