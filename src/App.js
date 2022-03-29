import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import VisitPage from "./views/visitPage";
import injectContext from "./store/pololitoContext";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import LostPassword from "./views/LostPassword"
import MisAvisos from "./views/MisAvisos"
import MisPololitos from "./views/MisPololitos"
import AddPetition from "./views/AddPetition";
import ResetPassword from "./views/ResetPassword"
import WhoAmI from "./views/WhoAmI"


import ProtectedRoutes from "./components/ProtectedRoute";
import PublicRoutes from "./components/PublicRoute";

const App = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/** Protected Routes */}
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/" element={<Navigate replace to="home" />} />
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/publications" element={<MisAvisos />}></Route>
                        <Route path="/pololitos" element={<MisPololitos />}></Route>
                        <Route path="/petition" element={<AddPetition />}></Route>
                        <Route path="/who_am_i" element={<WhoAmI />}></Route>
                    </Route>

                    {/** Public Routes */}
                    <Route path="/" element={<PublicRoutes />}>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/forgot-password" element={<LostPassword />}></Route>
                        <Route path="/landing" element={<VisitPage />}></Route>
                        <Route path="*" element={<p>Nada por aquí: error 404!</p>} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);
