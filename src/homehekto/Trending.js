import Slider from "react-slick";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
import TrendingProducts from "./TrendingProducts";
function Trending() {
  // const listImages = [
  //   "./images/box for image.png",
  //   "./images/box for image (1).png",
  //   "./images/box for image (2).png",
  //   "./images/box for image (3).png",
  //   "./images/box for image.png",
  //   "./images/box for image (1).png",
  //   "./images/box for image (2).png",
  //   "./images/box for image (3).png",
  // ];
  const settings = {
    dots: false,
    arrows: false,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    rows: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 1,
          slideToSroll: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    arrows: false,
    autoplay: false,
    slidesPerRow: 1,
    slideToSroll: 1,
    slidesToShow: 3,
    rows: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slideToSroll: 2,
          autoplay: true,
          slidesPerRow: 1,
          autoplaySpeed: 3000,
          rows: 1,
        },
      },
      {
        breakpoint: 495,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slideToSroll: 1,
          autoplay: true,
          slidesPerRow: 1,
          autoplaySpeed: 3000,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="content__trending">
      <div className="content__trending__products">
        <h1>Trending Products</h1>
      </div>
      <div className="content__trending__productitems">
        <div id="trending__mobile">
          <div className="content__trending__productitems__item1">
            <Slider {...settings}>
              {shopgrid_product.map((list, index) =>
                list.pid.includes("td") ? (
                  <TrendingProducts
                    pid={list.pid}
                    image={list.image}
                    title={list.title}
                    price={list.price}
                    sale={list.sale}
                    key={index}
                  />
                ) : null
              )}
            </Slider>
          </div>
          <div className="content__trending__productitems__item2">
            <Slider {...settings1}>
              <div className="content__trending__productitems__item2__sale1">
                <div className="content__trending__productitems__item2__sale1__all">
                  <img alt="" src="./images/image 1162.png"></img>
                </div>
                <div className="content__trending__productitems__item2__sale1__products">
                  <h2>23% off in all products</h2>
                  <a href="/#">Shop Now</a>
                </div>
              </div>
              <div className="content__trending__productitems__item2__sale2">
                <div className="content__trending__productitems__item2__sale2__all">
                  <img alt="" src="./images/image 1161.png"></img>
                </div>
                <div className="content__trending__productitems__item2__sale2__products">
                  <h2>23% off in all products</h2>
                  <a href="/#">View Collection</a>
                </div>
              </div>
              <div className="content__trending__productitems__item2__executive">
                <div className="content__trending__productitems__item2__executive__seat">
                  <div className="content__trending__productitems__item2__executive__seat__img">
                    <img alt="" src="./images/image 30.png"></img>
                  </div>
                  <div className="content__trending__productitems__item2__executive__seat__chair">
                    <p className="name">Executive Seat chair</p>
                    <p className="price">$32.00</p>
                  </div>
                </div>
                <div className="content__trending__productitems__item2__executive__seat">
                  <div className="content__trending__productitems__item2__executive__seat__img">
                    <img alt="" src="./images/image 19.png"></img>
                  </div>
                  <div className="content__trending__productitems__item2__executive__seat__chair">
                    <p className="name">Executive Seat chair</p>
                    <p className="price">$32.00</p>
                  </div>
                </div>
                <div className="content__trending__productitems__item2__executive__seat">
                  <div className="content__trending__productitems__item2__executive__seat__img">
                    <img alt="" src="./images/image 28.png"></img>
                  </div>
                  <div className="content__trending__productitems__item2__executive__seat__chair">
                    <p className="name">Executive Seat chair</p>
                    <p className="price">$32.00</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trending;
