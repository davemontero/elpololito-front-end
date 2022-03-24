import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import LostPassword from "./views/LostPassword"
import "./styles/index.css"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/app" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot-password" element={<LostPassword />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
);
