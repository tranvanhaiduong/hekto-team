import { Fragment } from "react";
import ContentSingle from "../homehekto/ContentSingle";
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";

function SingleBlock() {
  return (
    <Fragment>
      <Navigation title="Single Blog" name="Single Blog" />
      <ContentSingle />
      <Logo />
    </Fragment>
  );
}
export default SingleBlock;
