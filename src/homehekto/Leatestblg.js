import LeatestBlog from "./LeatestBlog";

import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
class Leatestblg extends React.Component {
  render() {
    const listImages = [
      "./images/JIUjvqe2ZHg.png",
      "./images/2dc.png",
      "./images/3dc.png",
      "./images/JIUjvqe2ZHg.png",
      "./images/2dc.png",
      "./images/3dc.png",
    ];
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    };

    return (
      <div className="content__leatestblg">
        <div className="content__leatestblg__blog">
          <h1>Leatest Blog</h1>
        </div>
        <div className="content__leatestblg__top">
          <div id="leatestblg__mobile">
            <Slider {...settings}>
              {listImages.map((image, index) => (
                <LeatestBlog image={image} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Leatestblg;
