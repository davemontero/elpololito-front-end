import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { Button, Spinner } from "react-bootstrap";

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
          if (data[0].status) {
            localStorage.setItem("jwt", data[1].token);
            navigate("/home");
          } else {
            swal({
              title: "Error",
              text: data[0].msg,
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
        .then(() => {
          setShowSpinner(false)
        } );
    }
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <div className="login-title">El pololito</div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="mb-3">
            <label
              htmlFor="formLoginUser"
              className="form-label form-label-white"
            >
              Correo
            </label>
            <input
              autoFocus
              type="text"
              className="form-control"
              name="user"
              id="inputUser"
              value={email}
              onChange={handleOnChangeUser}
              onBlur={handleOnBlurUser}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formLoginPassword"
              className="form-label form-label-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleOnChangePassword}
              onKeyUp={handleOnKeyUpPassword}
              id="inputPassword"
              required
            />
          </div>
          <Link to="/forgot-password" className="text-center">
            Olvide mi Contraseña
          </Link>
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
              Iniciar
            </Button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Login;
