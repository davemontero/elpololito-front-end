import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header"
import LandingPage from "./views/LandingPage";
import injectContext from "./store/pololitoContext";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
    return <>
        <Header />
        <LandingPage/>
</>
}

export default injectContext(App);
