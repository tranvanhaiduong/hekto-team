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
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
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
        breakpoint: 795,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          rows: 2,
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
            {fakedata.map((fake) => (
              <RelatedProduct
                image={fake.image}
                title={fake.title}
                rating={fake.rating}
                price={fake.price}
              />
            ))}
          </div>
          <div id="related__mobile">
            <Slider {...settings}>
              {fakedata.map((fake) => (
                <RelatedProduct
                  image={fake.image}
                  title={fake.title}
                  rating={fake.rating}
                  price={fake.price}
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
