import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Spinner,
  Button,
  Row,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";

const ResetPassword = () => {
  let navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [passwd1, setPasswd1] = useState("");
  const [passwd2, setPasswd2] = useState("");
  const [passwd3, setPasswd3] = useState("");

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Formato de contraseña</Popover.Header>
      <Popover.Body>
        <span>
          <b>1.</b> Al menos una minuscula
        </span>
        <br />
        <span>
          <b>2.</b> Al menos una mayuscula
        </span>
        <br />
        <span>
          <b>3.</b> Al menos un número
        </span>
        <br />
        <span>
          <b>4.</b> Al menos un ($@#*-){" "}
        </span>
        <br />
        <span>
          <b>5.</b> Al menos 6 caracteres
        </span>
      </Popover.Body>
    </Popover>
  );

  const isValidatePassword = (passwd) => {
    const passwordChecks = {
      caps: /[A-Z]/.test(passwd),
      lows: /[a-z]/.test(passwd),
      numb: /[0-9]/.test(passwd),
      spch: /[$@#*-]/.test(passwd),
      leng: passwd.length >= 6 && passwd.length <= 50,
    };

    const validate = Object.entries(passwordChecks).filter((value, i) =>
      value.includes(false)
    );
    return !validate.length ? true : false;
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setShowSpinner(true);
    if (!isValidatePassword(passwd1)) {
      setShowSpinner(false);
      swal({
        title: "Error",
        text: "La contraseña actual no cumple con el formato",
        icon: "error",
        timer: 5000,
      });
    } else if (!isValidatePassword(passwd2) || !isValidatePassword(passwd3)) {
      setShowSpinner(false);
      swal({
        title: "Error",
        text: "Las contraseñas nuevas no cumplen con el formato",
        icon: "error",
        timer: 5000,
      });
    } else if (passwd2 != passwd3) {
      setShowSpinner(false);
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
        .catch((error) =>
          console.error("Error:", error).then(() => setShowSpinner(false))
        );
    }
  };
  return (
    <main className="box-container">
      <div className="box">
        <div className="box-title">Reestablecer contraseña</div>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="my-4">
            <Form.Label htmlFor="formResetActualPassword">
              Contraseña actual
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="formResetActualPassword"
              className="inputCustom"
              value={passwd1}
              onChange={(e) => setPasswd1(e.target.value)}
              required
            />
          </Form.Group>
          <div className="dropdown-divider"></div>
          <Form.Group className="my-4">
            <OverlayTrigger placement="top" overlay={popover}>
              <Form.Label htmlFor="formResetNewPassword">
                Contraseña
                <BsQuestionCircle className="align-text-top ms-1 span-require" />
              </Form.Label>
            </OverlayTrigger>
            <Form.Control
              name="password"
              type="password"
              id="formResetNewPassword"
              className="inputCustom"
              value={passwd2}
              onChange={(e) => setPasswd2(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="my-4">
            <Form.Label htmlFor="formResetConfirmPassword">
              Confirmar contraseña
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="formResetConfirmPassword"
              className="inputCustom"
              value={passwd3}
              onChange={(e) => setPasswd3(e.target.value)}
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
              <Button type="submit" className="box-btn mt-2">
                Cambiar
              </Button>
            )}
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default ResetPassword;
