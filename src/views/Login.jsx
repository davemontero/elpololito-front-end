import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
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


  const handleLogin = e => {
    e.preventDefault()
    const passwordValidate = Object.entries(checksPassword).filter(value => value.includes(false))
    if (!checksUser) {
      toast.error('Favor, ingrese un correo valido', {autoClose: 2400})
    } else if (passwordValidate.length > 0){
      toast.error('Usuario o contraseña incorrectos', {autoClose: 2400})
    } else {
      const id = toast.loading("Cargando...")
      const userValidate = {
          user: "dave@gmail.com",
          password: "oa1Rasd*"
      }
      fetch("http://localhost:5000/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userValidate)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          navigate('/app')
        } else {
          toast.update(id, {
            render: data.msg,
            type: "error",
            isLoading: false,
            closeButton: true,
          })
        }
      })
    }
  }

  return (
    <main className="login-wrapper">
      <div className="login-title">El pololito</div>
      <div className="login-box">
        <form onSubmit={handleLogin} className="login-form">
          <ToastContainer />
          <div className="mb-3">
            <label htmlFor="formLoginUser" className="form-label">
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
            <label htmlFor="formLoginPassword" className="form-label">
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
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
