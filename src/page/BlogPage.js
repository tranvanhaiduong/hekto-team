import { Fragment } from "react";
//Components
import Logo from "../homehekto/Logo";
import Navigation from "../homehekto/Navigation";
import BlogPagebwt from "../homehekto/BlogPagebwt";

export default function BlogPage() {
  return (
    <Fragment>
      <Navigation title="Blog Page" name="Blog Page" page="blog" />
      <BlogPagebwt />
      <Logo />
    </Fragment>
  );
}
