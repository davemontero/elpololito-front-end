import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const ResetPassword = () => {
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [passwd1, setPasswd1] = useState("");
  const [passwd2, setPasswd2] = useState("");
  const [passwd3, setPasswd3] = useState("");
  const handleChange1 = (e) => setPasswd1(e.target.value);
  const handleChange2 = (e) => setPasswd2(e.target.value);
  const handleChange3 = (e) => setPasswd3(e.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    setShowSpinner(true);
    if (passwd2 != passwd3) {
      swal({
        title: "Error",
        text: "Las contraseñas no son iguales",
        icon: "error",
        timer: 5000,
      });
    } else {
      fetch("http://localhost:5000/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: localStorage.getItem("resetEmail"),
          old_password: passwd1,
          new_password: passwd2,
        }),
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
                localStorage.removeItem("resetEmail");
                navigate("/login");
              })
            : swal({
                title: "Error",
                text: data.msg,
                icon: "error",
                timer: 5000,
              });
        })
        .catch((error) => console.error("Error:", error).then(() => setShowSpinner(false)));
    }
  };
  return (
    <main className="forgotPassword-wrapper">
      <div className="forgotPassword-box">
        <div className="login-title">El pololito</div>
        <form onSubmit={handleOnSubmit}>
          <h2 className="mb-3">Cambiar contraseña</h2>
          <div className="mb-4">
            <label
              htmlFor="inputPassword1"
              className="form-label form-label-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="inputPassword1"
              value={passwd1}
              onChange={handleChange1}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputPassword1"
              className="form-label form-label-white"
            >
              Nueva contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="inputPassword1"
              value={passwd2}
              onChange={handleChange2}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputPassword3"
              className="form-label form-label-white"
            >
              Confirmar nueva contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="inputPassword3"
              value={passwd3}
              onChange={handleChange3}
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

export default ResetPassword;
