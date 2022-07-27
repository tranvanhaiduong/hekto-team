import Sidebar from "./Sidebar";
import { shopgrid_product } from "../fake -data/fakedata-shopgrid";
import LeftProduct from "./LeftProduct";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 495,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
      },
    },
    {
      breakpoint: 1245,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
      },
    },
  ],
};
const checks = [
  "Coaster Furniture",
  "Fusion Dot High Fashion",
  "Unique Furnitture Restor",
  "Dream Furnitture Flipping",
  "Young Repurposed",
  "Green DIY furniture",
];

const offers = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];
const rates = [
  {
    rating: [
      ...Array(4)
        .fill().map((ratings,index) => <img key={index} alt="" src=" ./images/Vector (8).png"></img>)
        ,
      ...Array(1)
      .fill().map((ratings,index) => <img key={index+4} alt="" src=" ./images/Vector (10).png"></img>)
       ,
    ],
    numbercount: "222",
  },
  {
    rating: [
      ...Array(3)
        .fill().map((ratings,index) => <img key={index} alt="" src=" ./images/Vector (8).png"></img>)
        ,
      ...Array(2)
      .fill().map((ratings,index) => <img key={index+3} alt="" src=" ./images/Vector (10).png"></img>)
       ,
    ],
    numbercount: "222",
  },
  {
    rating: [
      ...Array(2)
        .fill().map((ratings,index) => <img key={index} alt="" src=" ./images/Vector (8).png"></img>)
        ,
      ...Array(3)
      .fill().map((ratings,index) => <img key={index+2} alt="" src=" ./images/Vector (10).png"></img>)
       ,
    ],
    numbercount: "222",
  },
  {
    rating: [
      ...Array(2)
        .fill().map((ratings,index) => <img key={index} alt="" src=" ./images/Vector (8).png"></img>)
        ,
      ...Array(3)
      .fill().map((ratings,index) => <img key={index+2} alt="" src=" ./images/Vector (10).png"></img>)
       ,
    ],
    numbercount: "222",
  },
];
const categories = [
  "Prestashop",
  "Magento",
  "Bigcommerce",
  "osCommerce",
  "3dcart",
  "Bags Accessories Jewellery",
  "Watches",
];
const prices = [
  "$0.00 - $150.00",
  "$150.00 - $350.00",
  "$150.00 - $504.00",
  "$450.00 +",
];
function ShopLeftSidebar({toggleViewMode}) {
  console.log(toggleViewMode);
  return (
    <div className="contentShop__shopleft">
      <div id="shopleft__pc">
        <div className="contentShop__shopleft__sidebar">
          <div className="contentShop__shopleft__sidebar__brand">
            <div className="contentShop__shopleft__sidebar__brand__title">
              <h1>Product Brand</h1>
            </div>
            {checks.map((checkking, index) => (
              <Sidebar checkking={checkking} key={index} />
            ))}
          </div>
          <div className="contentShop__shopleft__sidebar__discount">
            <div className="contentShop__shopleft__sidebar__discount__title">
              <h1>Discount Offer</h1>
            </div>
            {offers.map((offer, index) => (
              <Sidebar image="./images/check_offer.png" checkking={offer} key={index} />
            ))}
          </div>
          <div className="contentShop__shopleft__sidebar__rating">
            <div className="contentShop__shopleft__sidebar__rating__title">
              <h1>Rating Item</h1>
            </div>
            {rates.map((rate, index) => (
              <Sidebar
                image="./images/check_rating.png"
                checkking={rate.numbercount}
                rating={rate.rating}
                key = {index}
              />
            ))}
          </div>
          <div className="contentShop__shopleft__sidebar__categories">
            <div className="contentShop__shopleft__sidebar__categories__title">
              <h1>Categories</h1>
              {categories.map((category, index) => (
                <Sidebar image="./images/check_offer.png" checkking={category} key={index} />
              ))}
            </div>
          </div>
          <div className="contentShop__shopleft__sidebar__price">
            <div className="contentShop__shopleft__sidebar__price__title">
              <h1>Price Filter</h1>
              {prices.map((price, index) => (
                <Sidebar image="./images/check_offer.png" checkking={price} key={index} />
              ))}
            </div>
            <div className="contentShop__shopleft__sidebar__search">
              <div className="contentShop__shopleft__sidebar__search__input">
                <input placeholder="$10.00 - 20000$"></input>
                <div className="contentShop__shopleft__sidebar__search__input__icon">
                  <img alt="" src="./images/Vector (13).png"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="contentShop__shopleft__sidebar__color">
            <div className="contentShop__shopleft__sidebar__color__tilte">
              <h1>Filter By Color</h1>
            </div>
            <div className="contentShop__shopleft__sidebar__color__filter">
              <div className="contentShop__shopleft__sidebar__color__filter__top">
                <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                  <img alt="" src="./images/blue.png"></img>
                  <a href="/">Blue</a>
                </div>
                <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                  <img alt="" src="./images/orange.png"></img>
                  <a href="/">Orange</a>
                </div>
                <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                  <img alt="" src="./images/Brown.png"></img>
                  <a href="/">Brown</a>
                </div>
              </div>
              <div className="contentShop__shopleft__sidebar__color__filter__bottom">
                <div className="contentShop__shopleft__sidebar__color__filter__bottom__blue">
                  <img alt="" src="./images/sky.png"></img>
                  <a href="/">Green</a>
                </div>
                <div className="contentShop__shopleft__sidebar__color__filter__bottom__blue">
                  <img alt="" src="./images/purple.png"></img>
                  <a href="/">Purple</a>
                </div>
                <div className="contentShop__shopleft__sidebar__color__filter__bottom__sky">
                  <img alt="" src="./images/green.png"></img>
                  <a href="/">Sky</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {toggleViewMode?
        <div id="shopleft__list">
        <div className="contentShop__shopleft__listproduct">
          {shopgrid_product.map((list, index) => (
             list.pid.includes("sp")?
            <LeftProduct
              pid={list.pid}
              key={index}
              image={list.image}
              title={list.title}
              colors={list.color}
              price={list.price}
              sale={list.sale}
              ratings={list.rating}
              description={list.description}
              vectors={list.vector}
            />
            :null
          ))}
        </div>
        </div>
        :
        <div id="shopleft__grid">
        <div className="contentShop__shopleft__listproduct">
          {shopgrid_product.map((list,index) =>
            list.pid.includes("sp") ? (
              <LeftProduct
                pid={list.pid}
                key={index}
                image={list.image}
                title={list.title}
                colors={list.color}
                price={list.price}
                sale={list.sale}
                ratings={list.rating}
                description={list.description}
                vectors={list.vector}
              />
            ) : null
          )}
        </div>
        </div>}
      </div>
      <div id="shopleft__mobile">
        <div className="contentShop__shopleft__sidebar">
          <Slider {...settings}>
            <div className="contentShop__shopleft__sidebar__brand">
              <div className="contentShop__shopleft__sidebar__brand__title">
                <h1>Product Brand</h1>
                {checks.map((checkking, index) => (
                  <Sidebar image="./images/check.png" checkking={checkking} key={index} />
                ))}
              </div>
            </div>
            <div className="contentShop__shopleft__sidebar__discount">
              <div className="contentShop__shopleft__sidebar__discount__title">
                <h1>Discount Offer</h1>
                {offers.map((offer, index) => (
                  <Sidebar image="./images/check_offer.png" checkking={offer} key={index} />
                ))}
              </div>
            </div>
            <div className="contentShop__shopleft__sidebar__rating">
              <div className="contentShop__shopleft__sidebar__rating__title">
                <h1>Rating Item</h1>
                {rates.map((rate, index) => (
                  <Sidebar
                    image="./images/check_rating.png"
                    checkking={rate.numbercount}
                    rating={rate.rating}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="contentShop__shopleft__sidebar__categories">
              <div className="contentShop__shopleft__sidebar__categories__title">
                <h1>Categories</h1>
                {categories.map((category, index) => (
                  <Sidebar image="./images/check_offer.png" checkking={category} key={index} />
                ))}
              </div>
            </div>
            <div className="contentShop__shopleft__sidebar__price">
              <div className="contentShop__shopleft__sidebar__price__title">
                <h1>Price Filter</h1>
                {prices.map((price, index) => (
                  <Sidebar image="./images/check_offer.png" checkking={price} key={index} />
                ))}
              </div>
              <div className="contentShop__shopleft__sidebar__search">
                <div className="contentShop__shopleft__sidebar__search__input">
                  <input placeholder="$10.00 - 20000$"></input>
                  <div className="contentShop__shopleft__sidebar__search__input__icon">
                    <img alt="" src="./images/Vector (13).png"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentShop__shopleft__sidebar__color">
              <div className="contentShop__shopleft__sidebar__color__tilte">
                <h1>Filter By Color</h1>
                <div className="contentShop__shopleft__sidebar__color__filter">
                  <div className="contentShop__shopleft__sidebar__color__filter__top">
                    <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                      <img alt="" src="./images/blue.png"></img>
                      <a href="/">Blue</a>
                    </div>
                    <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                      <img alt="" src="./images/orange.png"></img>
                      <a href="/">Orange</a>
                    </div>
                    <div className="contentShop__shopleft__sidebar__color__filter__top__blue">
                      <img alt="" src="./images/Brown.png"></img>
                      <a href="/">Brown</a>
                    </div>
                  </div>
                  <div className="contentShop__shopleft__sidebar__color__filter__bottom">
                    <div className="contentShop__shopleft__sidebar__color__filter__bottom__blue">
                      <img alt="" src="./images/sky.png"></img>
                      <a href="/">Green</a>
                    </div>
                    <div className="contentShop__shopleft__sidebar__color__filter__bottom__blue">
                      <img alt="" src="./images/purple.png"></img>
                      <a href="/">Purple</a>
                    </div>
                    <div className="contentShop__shopleft__sidebar__color__filter__bottom__sky">
                      <img alt="" src="./images/green.png"></img>
                      <a href="/">Sky</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="contentShop__shopleft__listproduct">
          <Slider {...settings}>

            {shopgrid_product.map((list, index) =>
              list.pid.includes("sp") ? (
                <LeftProduct
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

            {shopgrid_product.map((list,index) => (
              list.pid.includes("sp")?
              <LeftProduct
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
              :null
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
}
export default ShopLeftSidebar;
