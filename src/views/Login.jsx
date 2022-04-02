import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import {
  Form,
  Spinner,
  Button,
  Row
} from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [checksUser, setChecksUser] = useState(false);
  const [checksPassword, setChecksPassword] = useState({
    caps: false,
    lows: false,
    numb: false,
    spch: false,
    leng: false,
  });

  const handleOnChangeUser = (e) => setEmail(e.target.value);

  const handleOnBlurUser = () => {
    const user =
      /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}.([a-z{2,3}])?/.test(
        email
      );
    setChecksUser(user);
  };

  const handleOnKeyUpPassword = (e) => {
    const { value } = e.target;
    const caps = /[A-Z]/.test(value);
    const lows = /[a-z]/.test(value);
    const numb = /[0-9]/.test(value);
    const spch = /[$@#*-]/.test(value);
    const leng = value.length >= 6 && value.length <= 50;
    setChecksPassword({
      caps,
      lows,
      numb,
      spch,
      leng,
    });
  };
  const handleOnChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const passwordValidate = Object.entries(checksPassword).filter((value) =>
      value.includes(false)
    );
    
    if (!checksUser) {
      swal({
        title: "Error",
        text: "Favor, ingrese un correo valido",
        icon: "error",
        timer: 5000,
      })
      setEmail("")
      setShowSpinner(false)
    } else if (passwordValidate.length > 0) {
      swal({
        title: "Error",
        text: "La contraseña debe tener lo siguiente: \n\n 1. Al menos 1 minúscula \n 2. Al menos 1 mayúscula \n 3. Al menos 1 número \n 4. Al menos 1 caracter especial ($@#*-) \n 5. Mínimo 6 caracteres",
        icon: "error",
        timer: 7000,
      })
      setPassword("")
      setShowSpinner(false)
    } else {
      const userValidate = {
        user: email,
        password: password,
      };
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValidate),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            localStorage.setItem("jwt", data.token);
            navigate("/home");
          } else {
            swal({
              title: "Error",
              text: data.msg,
              icon: "error",
              timer: 5000
            });
          }
        })
        .catch(() => {
          swal({
            title: "Error",
            text: "Ha ocurrido un problema, intentalo más tarde.",
            icon: "error",
            timer: 5000
          });
        })
        .then(() => {setShowSpinner(false)});
    }
  };

  return (
    <main className="box-container">
      <div className="box box-login">
        <div className="box-title">Inicio de sesión</div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="my-3">
            <Form.Label htmlFor="formLoginUser">Email</Form.Label>
            <Form.Control
              name="user"
              type="email"
              id="formLoginUser"
              className="inputCustom"
              placeholder="isabellagonzalez@dominio.com"
              onChange={handleOnChangeUser}
              onBlur={handleOnBlurUser}
              value={email}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label htmlFor="formLoginPassword">Contraseña</Form.Label>
            <Form.Control
              name="password"
              type="password"
              id="formLoginPassword"
              className="inputCustom"
              onChange={handleOnChangePassword}
              onKeyUp={handleOnKeyUpPassword}
              value={password}
              required
            />
          </Form.Group>
          <Row className="justify-content-center">
            <Link to="/forgot-password" className="text-center my-2">Olvide mi contraseña</Link>
            {showSpinner ? (
              <Button className="box-btn my-2" disabled>
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
              <Button type="submit" className="box-btn my-2">
                Enviar
              </Button>
            )}
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default Login;
