import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import injectContext from "./store/pololitoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes >
        < Route/>
        < Route/>
        < Route/>
        < Route/>
        < Route/>
      </Routes>
    </ Router>
  </>
}

export default injectContext;
