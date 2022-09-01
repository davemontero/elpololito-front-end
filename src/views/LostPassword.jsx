import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { Form, Spinner, Button, Row } from "react-bootstrap";

const LostPassword = () => {
  let navigate = useNavigate();
  localStorage.removeItem("resetEmail");
  const [showSpinner, setShowSpinner] = useState(false);
  const [mail, setMail] = useState("");

  const isValidateMail = (mail) => {
    const user =
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}.([a-z{2,3}])?/.test(
        mail
      );
    return user;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSpinner(true)
    const user = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}.([a-z{2,3}])?/.test(mail);
    
    if (!user) {
      setShowSpinner(false)
      swal(
        {
          title: "Error",
          text: "Favor, ingrese un correo valido",
          icon: "error",
          timer: 5000,
        }
      )
    } else {
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
                localStorage.setItem("resetEmail", mail);
                navigate("/reset-password");
              })
            : swal({
                title: "Error",
                text: data.msg,
                icon: "error",
                timer: 5000,
              })
        })
        .catch((error) => console.error("Error:", error))
        .then(() => setShowSpinner(false));
    }
    
  }

  return (
    <main className="box-container">
      <div className="box">
        <Form onSubmit={handleSubmit}>
          <div className="box-title">Reestablecer contraseña</div>
          <Form.Group className="my-3">
            <Form.Label htmlFor="formResetPassword">Email</Form.Label>
            <Form.Control
              name="user"
              type="email"
              id="formResetPassword"
              className="inputCustom"
              placeholder="isabellagonzalez@dominio.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Row className="justify-content-center">
            {showSpinner ? (
              <Button className="box-btn mt-3" disabled>
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
              <Button type="submit" className="box-btn mt-3">
                Iniciar
              </Button>
            )}
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default LostPassword;
