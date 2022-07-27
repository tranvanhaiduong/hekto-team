import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        rows: 1,
      },
    },
  ],
};
const listImages = [
  {
    title: "Free Delivery",
    image: "./images/free-delivery 1.png",
  },
  {
    title: "100% Cash Back",
    image: "./images/cashback 1.png",
  },
  {
    title: "Quality Product",
    image: "./images/premium-quality 1.png",
  },
  {
    title: "24/7 Support",
    image: "./images/24-support.png",
  },
];

function AboutContent() {
  return (
    <div className="aboutcontent">
      <div className="aboutcontent__top">
        <div className="aboutcontent__top__image">
          <img src="./images/Group 73.png" alt=""></img>
        </div>
        <div className="aboutcontent__top__info">
          <div className="aboutcontent__top__info__title">
            Know About Our Ecomerce Business, History
          </div>
          <div className="aboutcontent__top__info__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </div>
          <button>Contact us</button>
        </div>
      </div>
      <div className="aboutcontent__center">
        <h1>Our Features</h1>

        <div id="about__mobile">
          <div className="aboutcontent__center__offers">
            <Slider {...settings}>
              {listImages.map((list) => (
                <div
                  className="aboutcontent__center__offers__1"
                  style={{ display: "flex" }}
                >
                  <div className="aboutcontent__center__offers__1__offer">
                    <div className="aboutcontent__center__offers__1__offer__image">
                      <img src={list.image} alt=""></img>
                    </div>
                    <div className="aboutcontent__center__offers__1__offer__title">
                      {list.title}
                    </div>
                    <div className="aboutcontent__center__offers__1__offer__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Massa purus gravida.
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div id="about__pc">
          <div className="aboutcontent__center__offers">
            {listImages.map((list) => (
              <div className="aboutcontent__center__offers__1">
                <div className="aboutcontent__center__offers__1__offer">
                  <div className="aboutcontent__center__offers__1__offer__image">
                    <img src={list.image} alt=""></img>
                  </div>
                  <div className="aboutcontent__center__offers__1__offer__title">
                    {list.title}
                  </div>
                  <div className="aboutcontent__center__offers__1__offer__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="aboutcontent__bot">
        <h1>Our Client Say!</h1>
        <div className="aboutcontent__bot__content">
          <div className="aboutcontent__bot__content__image">
            <div className="aboutcontent__bot__content__image__1">
              <img src="./images/OhKElOkQ3RE.png" alt=""></img>
            </div>
            <div className="aboutcontent__bot__content__image__2">
              <img src="./images/GH-mSApoKO0.png" alt=""></img>
            </div>
            <div className="aboutcontent__bot__content__image__3">
              <img src="./images/RukI4qZGlQs.png" alt=""></img>
            </div>
          </div>
          <div className="aboutcontent__bot__content__name">
            <p>Selina Gomez</p>
            <span>Ceo At Webecy Digital</span>
          </div>
          <div className="aboutcontent__bot__content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </div>
        </div>
        <div className="aboutcontent__bot__footer">
          <img src="./images/Rectangle 94.png" alt=""></img>
          <img src="./images/Rectangle 104.png" alt=""></img>
          <img src="./images/Rectangle 94.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default AboutContent;
