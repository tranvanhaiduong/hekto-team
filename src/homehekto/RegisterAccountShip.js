import RegisterAccountContact from "./RegisterAccountContact";
import RegisterAccountProduct from "./RegisterAccountProduct";
import Slider from "react-slick";

export default function RegisterAccountShip() {
  const ListProduct = [
    {
      image: "../images/RectangleAc1.png",
    },
    {
      image: "../images/RectangleAc2.png",
    },
    {
      image: "../images/RectangleAc3.png",
    },
    {
      image: "../images/RectangleAc4.png",
    },
    {
      image: "../images/RectangleAc5.png",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slideToSroll: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slideToSroll: 1,
          slidesToScroll: 1,
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
  return (
    <div className="RegisterAccountShip">
      <div className="RegisterAccountShip__vp">
        <p className="RegisterAccountShip__vp__n">Hekto Demo</p>
        <p className="RegisterAccountShip__vp__a">
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>
      <div className="RegisterAccountShip__ship">
        <div className="RegisterAccountShip__ship__left">
          <RegisterAccountContact />
        </div>
        <div className="RegisterAccountShip__ship__right">
          <div className="RegisterAccountShip__ship__right__product">
            <Slider {...settings}>
              {ListProduct.map((product, index) => (
                <RegisterAccountProduct image={product.image} key={index} />
              ))}
            </Slider>
          </div>
          <div className="RegisterAccountShip__ship__right__checkout">
            <div className="ProductCurt__right__cartTT">
              <div className="ProductCurt__right__cartTT__btn">
                <div className="ProductCurt__right__cartTT__btn__sub">
                  <p className="ProductCurt__right__cartTT__btn__sub__i">
                    Subtotals:
                  </p>
                  <p className="ProductCurt__right__cartTT__btn__sub__p">
                    £219.00
                  </p>
                </div>
                <div className="ProductCurt__right__cartTT__btn__tot">
                  <p className="ProductCurt__right__cartTT__btn__tot__i">
                    Totals:
                  </p>
                  <p className="ProductCurt__right__cartTT__btn__tot__p">
                    £325.00
                  </p>
                </div>
                <div className="ProductCurt__right__cartTT__btn__ckb">
                  <input
                    className="ProductCurt__right__cartTT__btn__ckb__c"
                    type={"checkbox"}
                  ></input>
                  <p className="ProductCurt__right__cartTT__btn__ckb__p">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <div className="ProductCurt__right__cartTT__btn__btcl">
                  <button className="ProductCurt__right__cartTT__btn__btcl__bt">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
