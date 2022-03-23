import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../store/pololitoContext";



const LoginForm = () => {
  let navigate = useNavigate()
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checksUser, setChecksUser] = useState(false);
  const [checksPassword, setChecksPassword] = useState(false);

  const handleOnChangeUser = e => setEmail(e.target.value);

  const handleOnBlurUser = (email) => {
    setChecksUser(actions.testEmail(email));
  };
  
  const handleOnBlurPassword = (pass) => {
    setChecksPassword(actions.testPassword(pass));
  };

  const handleOnChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = e => {
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
        {
          if (data.status) {
            navigate("/Home")
          }else{
            toast.update(id, {
              render: data.msg,
              type: "error",
              isLoading: false,
              closeButton: true,
            })
          }
        }
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
        <label htmlFor="inputPasswordLogin" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleOnChangePassword}
          onBlur={handleOnBlurPassword}
          id="inputPasswordLogin"
          required
        />
      </div>
      <div className="mb-3 text-center">
        <Link to="/forgot-password">Olvide mi Contraseña</Link>
      </div>
      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
        Iniciar
      </button>
    </form>
  );
};

export default LoginForm;
