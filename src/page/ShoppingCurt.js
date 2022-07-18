import Navigation from "../homehekto/Navigation";
import CurtListPr from "../homehekto/CurtListPr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/productCurt.scss";
import "../scss/CurtProduct.scss";
import "../scss/Label.scss";
import { Fragment } from "react";

function ShoppingCurt() {
  return (
    <Fragment>
      <Navigation title="Shopping Curt" name="Shopping Curt"></Navigation>
      <CurtListPr />
    </Fragment>
  );
}
export default ShoppingCurt;
