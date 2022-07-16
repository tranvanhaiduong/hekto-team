import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./homehekto/Header";
//Components
import Main from "./router";
import Navbar from "./homehekto/Navbar";
import Footer from "./homehekto/Footer";
//Styles
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
