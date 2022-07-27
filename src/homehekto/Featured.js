import FeaturedProduct from "./FeaturedProdcuts";
import React from "react";
import Slider from "react-slick";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";

class Featured extends React.Component {
  render() {
     const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
          },
        },
      ],
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ marginTop: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            width: "24px",
            height: "4px",
            borderRadius: "10px",
            background: "#FEBAD7",
            marginTop:"53px"
          }}
        ></div>
      ),
    };
    
    return (
      <div className="content__featured">
        <div className="content__featured__products">
          <p>Featured Products</p>
          <div className="content__featured__slide">
            <div id="featured__mobile">
              <Slider {...settings}>
                {Array(4).fill().map(()=>
                shopgrid_product.map((list, index) => (
                  list.pid.includes("f")?
                  <FeaturedProduct image={list.image} pid={list.pid} key={index}/>
                  :null
                ))
                )}
              </Slider>
            </div>
            <div id="featured__ipad">
              <Slider {...settings}>
              {shopgrid_product.map((list, index) => (
                  list.pid.includes("f")?
                  <FeaturedProduct image={list.image} key={index} />
                  :null
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Featured;
