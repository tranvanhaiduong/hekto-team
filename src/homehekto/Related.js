import Slider from "react-slick";
import RelatedProduct from "./RelatedProduct";
function Related() {
  const fakedata = [
    {
      image: "/images/Rectangle 128.png",
      title: "Mens Fashion Wear",
      price: "$43.00",
      rating: [
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (10).png",
      ],
    },
    {
      image: "/images/Rectangle 133.png",
      title: "Women’s Fashion",
      price: "$67.00",
      rating: [
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
      ],
    },
    {
      image: "/images/Rectangle 130.png",
      title: "Wolx Dummy Fashion",
      price: "$67.00",
      rating: [
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (10).png",
      ],
    },
    {
      image: "/images/Rectangle 131.png",
      title: "Top Wall Digital Clock",
      price: "$51.00",
      rating: [
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (8).png",
        "/images/Vector (10).png",
        "/images/Vector (10).png",
      ],
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div id="related">
      <div className="contentShop__related">
        <div className="contentShop__related__products">
          <h1>Related Products</h1>
        </div>
        <div className="contentShop__related__slide">
          <div id="related__pc">
            {fakedata.map((fake, index) => (
              <RelatedProduct
                key={index}
                image={fake.image}
                title={fake.title}
                rating={fake.rating}
                price={fake.price}
              />
            ))}
          </div>
          <div id="related__mobile">
            <Slider {...settings}>
              {fakedata.map((fake, index) => (
                <RelatedProduct
                  image={fake.image}
                  title={fake.title}
                  rating={fake.rating}
                  price={fake.price}
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Related;
