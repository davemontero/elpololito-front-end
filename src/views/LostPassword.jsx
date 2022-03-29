import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { Button, Spinner } from "react-bootstrap";
const LostPassword = () => {
  let navigate = useNavigate();
  localStorage.removeItem('resetEmail')
  const [showSpinner, setShowSpinner] = useState(false);
  const [mail, setMail] = useState("");

  const changeMail = (event) => {
    setMail(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setShowSpinner(true);
    fetch("http://localhost:5000/password-recovery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: mail }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.status
          ? swal({
              title: "Exito",
              text: data.msg,
              icon: "success",
              timer: 5000,
            }).then(() => {
                localStorage.setItem('resetEmail', mail)
                navigate("/reset-password")
            })
          : swal({
              title: "Error",
              text: data.msg,
              icon: "error",
              timer: 5000,
            });
      })
      .catch((error) => console.error("Error:", error))
      .then(() => setShowSpinner(false));
  }

  return (
    <main className="forgotPassword-wrapper">
      <div className="forgotPassword-box">
      <div className="login-title">El pololito</div>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-3">Reestablecer contraseña</h2>
          <div className="mb-4">
            <label htmlFor="LostMail" className="form-label form-label-white">
              Ingrese su email
            </label>
            <input
              type="text"
              className="form-control"
              id="LostMail"
              placeholder="ejemplo@dominio.com"
              value={mail}
              onChange={changeMail}
            />
          </div>
          {showSpinner ? (
            <Button className="login-btn" disabled>
              <Spinner
                className="me-1"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Cargando...
            </Button>
          ) : (
            <Button type="submit" className="login-btn">
              Enviar
            </Button>
          )}
        </form>
      </div>
    </main>
  );
};

export default LostPassword;
