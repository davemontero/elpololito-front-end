import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checksUser, setChecksUser] = useState(false);
    const [checksPassword, setChecksPassword] = useState({
      caps: false,
      lows: false,
      numb: false,
      spch: false,
      leng: false,
    });

  const handleOnChangeUser = e => setEmail(e.target.value);

  const handleOnBlurUser = () => {
    const user = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}.([a-z{2,3}])?/.test(email);
    setChecksUser(user);
  };

  const handleOnChangePassword = (e) => setPassword(e.target.value);

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

  const handleLogin = e => {
    let navigate = useNavigate()
    e.preventDefault();
    const passwordValidate = Object.entries(checksPassword).filter(value => value.includes(false))
    if (!checksUser) {
      toast.error('Favor, ingrese un correo valido', {autoClose: 2400})
    } else if (passwordValidate.length > 0){
      toast.error('Usuario o contraseña incorrectos', {autoClose: 2400})
    } else {
      const id = toast.loading("Cargando...")
      const userValidated = {
        user: email,
        password: password
      }
      
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValidated)
      })
      .then(response => response.json())
      .then(data =>
        data.status ? navigate("/login") : toast.update(id, {
          render: data.msg,
          type: "error",
          isLoading: false,
          closeButton: true,
        })
      )
      .catch((error) => {
        toast.update(id, {render: error.message, type: "error", isLoading: false, closeButton: true})
      });
    }
  };

  return (
    <form className="needs-validation" onSubmit={handleLogin} noValidate>
      <ToastContainer />
      <div className="mb-3">
        <label htmlFor="inputUser" className="form-label">
          Usuario
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
        <label htmlFor="inputPassword" className="form-label">
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
      <div className="mb-3 text-center">
        <a href="#">Olvide mi Contraseña</a>
      </div>
      <button type="submit" className="btn btn-primary">
        Iniciar
      </button>
    </form>
  );
};

export default LoginForm;
