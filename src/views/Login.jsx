import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault()
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
    .then(data => navigate('/app'))
  }

  return (
    <main className="login-wrapper">
      <div className="login-title">El pololito</div>
      <div className="login-box">
        <form onSubmit={handleLogin} className="login-form">
          <div className="mb-3">
            <label htmlFor="formLoginUser" className="form-label">
              Correo
            </label>
            <input
              type="text"
              className="form-control"
              id="formLoginUser"
              name="user"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formLoginPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="formLoginPassword"
              name="password"
            />
          </div>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
