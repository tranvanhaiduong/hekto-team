import Header from "../homehekto/Header";
import Navbar from "../homehekto/Navbar";
import Footer from "../homehekto/Footer";
import Navigation from "../homehekto/Navigation";
import Login from "../homehekto/Login";
import Logo from "../homehekto/Logo";


// import "../scss/login.scss";
// import "../scss/variables.scss";
// import "../scss/mixin.scss"

export default function MyAccount() {
  return (
    <div>
      <Navigation title="My Account" name="My Account"></Navigation>
      <Login />
      <Logo />
    </div>
  );
}
