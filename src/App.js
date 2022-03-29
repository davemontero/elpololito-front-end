import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import VisitPage from "./views/visitPage";
import injectContext from "./store/pololitoContext";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import LostPassword from "./views/LostPassword"
import MisAvisos from "./views/MisAvisos"
import MisPololitos from "./views/MisPololitos"
import AddPetition from "./views/AddPetition";
import ResetPassword from "./views/ResetPassword"
import WhoAmI from "./views/WhoAmI"



const App = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VisitPage/> }></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/forgot-password" element={<LostPassword />}></Route>
                <Route path="/reset-password" element={<ResetPassword />}></Route>
                <Route path="/publications" element={<MisAvisos />}></Route>
                <Route path="/pololitos" element={<MisPololitos />}></Route>
                <Route path="/petition" element={<AddPetition />}></Route>
                <Route path="/who_am_i" element={<WhoAmI />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default injectContext(App);
