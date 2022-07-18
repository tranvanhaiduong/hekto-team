import { shoplist } from "../fake -data/fakedata-shoplist";
import ListProduct from "./ListProduct";
import Slider from "react-slick";
function ShopListProduct() {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 1,
    responsive: [
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className="contentShop__shoplist">
      <div id="shoplist__pc">
        {shoplist.map((list) => (
          <ListProduct
            pid={list.pid}
            image={list.image}
            title={list.title}
            colors={list.color}
            price={list.price}
            sale={list.sale}
            ratings={list.rating}
            description={list.description}
            vectors={list.vector}
          />
        ))}
      </div>
      <div id="shoplist__mobile">
        <Slider {...settings}>
          {shoplist.map((list) => (
            <ListProduct
              image={list.image}
              title={list.title}
              colors={list.color}
              price={list.price}
              sale={list.sale}
              ratings={list.rating}
              description={list.description}
              vectors={list.vector}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default ShopListProduct;
