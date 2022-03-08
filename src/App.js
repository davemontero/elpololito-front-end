import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import injectContext from "./store/pololitoContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./views/SignUp";

const App = () => {
    return <>
        <Router>
            <Routes>
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
        </Router>
    </>
}

export default App;