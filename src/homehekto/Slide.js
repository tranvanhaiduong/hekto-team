import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
class Slide extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      autoplaySpeed: 1000,
      // autoplay: true,
      // autoplaySpeed: 3000,
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
            width: "10px",
            height: "10px",
            transform: "rotate(-45deg)",
            border:"1px solid #FB2E86"
          }}
        ></div>
      ),
    };

    return (
      <div className="slides">
        <Slider {...settings}>
        <div className="slide">
          <div className="slide__img">
            <img alt="" src="./images/img1.png"></img>
            <img className="round" alt="" src="./images/Ellipse 62.png"></img>
          </div>
          <div className="slide__content">
            <p className="p1">Best Furniture For Your Castle....</p>
            <h3 className="h3">New Furniture Collection Trends in 2020</h3>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <Link to="/product">
              <button>Shop Now</button>
            </Link>
          </div>
          <div className="slide__right">
            <img alt="" src="./images/sofa promotional header.png"></img>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img">
            <img alt="" src="./images/img1.png"></img>
            <img className="round" alt="" src="./images/Ellipse 62.png"></img>
          </div>
          <div className="slide__content">
            <p className="p1">Best Furniture For Your Castle....</p>
            <h3 className="h3">New Furniture Collection Trends in 2020</h3>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button>Shop Now</button>
          </div>
          <div className="slide__right">
            <img alt="" src="./images/sofa promotional header.png"></img>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img">
            <img alt="" src="./images/img1.png"></img>
            <img className="round" alt="" src="./images/Ellipse 62.png"></img>
          </div>
          <div className="slide__content">
            <p className="p1">Best Furniture For Your Castle....</p>
            <h3 className="h3">New Furniture Collection Trends in 2020</h3>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button>Shop Now</button>
          </div>
          <div className="slide__right">
            <img alt="" src="./images/sofa promotional header.png"></img>
          </div>
        </div>
      </Slider>
      </div>
    );
  }
}
export default Slide;
