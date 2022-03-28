import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LogOut = () => {
  let navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <a
        className="nav-link nav-link-btn nav-link-btn-dark"
        href="#"
        onClick={handleLogOut}
      >
        Cerrar sesión
      </a>
    </>
  );
};

export default LogOut;
