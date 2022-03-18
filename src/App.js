<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import LostPassword from "./views/LostPassword";

const App = () => {
    return <>
        <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/password-recovery" element={<LostPassword />} />
            </Routes>
        </Router>
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"

import Header from "./components/Header"
import injectContext from "./store/pololitoContext";

const App = () => {
  return (
    <>
      <Header />
>>>>>>> aeb0b47819c9b42e0adfe5c8b232c5a5b2e872ef
    </>
  );
};

export default injectContext(App);
