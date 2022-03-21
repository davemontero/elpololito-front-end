import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import LostPassword from "./views/LostPassword";
import MisPololitos from "./views/MisPololitos";
import MisAvisos from "./views/MisAvisos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header"
import injectContext from "./store/pololitoContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return <>
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/password-recovery" element={<LostPassword />} />
                <Route path="/mis-pololitos" element ={<MisPololitos />} />
                <Route path="/mis-avisos" element ={<MisAvisos />} />
            </Routes>
        </Router>

</>
}

export default injectContext(App);
