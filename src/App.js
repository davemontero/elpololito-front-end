import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import injectContext from "./store/pololitoContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";

const App = () => {
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
        </Router>
    </>
}

export default App;