import ShopexOffer from "./ShopexOffer";
import React from "react";
import Slider from "react-slick";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
class Shopex extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
              {shopgrid_product.map((list, index) =>
                list.pid.includes("so") ? (
                  <ShopexOffer
                    pid={list.pid}
                    image={list.image}
                    title={list.title}
                    description={list.description}
                    key={index}
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
