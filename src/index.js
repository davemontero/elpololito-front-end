import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from "./views/Home";
import Login from "./views/Login";
import LostPassword from "./views/LostPassword"
import "./styles/index.css"
import MisAvisos from "./views/MisAvisos"
import MisPololitos from "./views/MisPololitos"
import ResetPassword from "./views/ResetPassword"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot-password" element={<LostPassword />}></Route>
      <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
      <Route path="/publications" element={<MisAvisos />}></Route>
      <Route path="/pololitos" element={<MisPololitos />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
);
