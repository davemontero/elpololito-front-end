import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header"
import injectContext from "./store/pololitoContext";

const App = () => {
  return (
    <Header />
  );
};

export default injectContext(App);
