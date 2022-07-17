import { Provider } from "react-redux";
import store from "./redux/store";

//Components
import Main from "./router";
import Navbar from "./homehekto/Navbar";
import Layout from "./homehekto/Layout";

//Styles
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <Main />
      </Layout>
    </Provider>
  );
}

export default App;
