import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Navigation from "../homehekto/Navigation";
import ErrorContent from "../homehekto/ErrorContent";
import Logo from "../homehekto/Logo";
import Footer from "../homehekto/Footer";

function Error() {
  return (
    <>
      <Navigation title="404 Not Found" name="404 Not Found"></Navigation>
      <ErrorContent></ErrorContent>
      <Logo></Logo>
    </>
  );
}
export default Error;
