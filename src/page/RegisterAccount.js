//Components
import Navigation from "../homehekto/Navigation";
import RegisterAccountShip from "../homehekto/RegisterAccountShip";
//Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../scss/RegisterAccountShip.scss";
import "../scss/RegisterAccountContact.scss";
import "../scss/RegisterAccountProduct.scss";

export default function RegisterAccount() {
  return (
    <div className="Home_hekto">
      <Navigation title="Hekto Demo" name="Hekto Demo"></Navigation>
      <RegisterAccountShip />
    </div>
  );
}
