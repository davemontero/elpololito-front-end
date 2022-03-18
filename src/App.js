import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import LostPassword from "./views/LostPassword";
import MisPololitos from "./views/MisPololitos";
import MisAvisos from "./views/MisAvisos";

const App = () => {
    return <>
        <Router>
        <Navbar />
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

export default App;