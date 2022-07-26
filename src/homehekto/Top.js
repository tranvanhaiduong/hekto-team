import TopCategories from "./TopCategories";

import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
class Top extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div className="content__top">
        <div className="content__top__categories">
          <h1>Top Categories</h1>
        </div>
        <div className="content__top__mini">
          <div id="mobile">
            <Slider {...settings}>
              {Array(2).fill().map(()=>
              shopgrid_product.map((list) => (
                list.pid.includes("top")?
              <TopCategories pid={list.pid} image={list.image} title={list.title} price={list.price}/>
              :null   
            )))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Top;
