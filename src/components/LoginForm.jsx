const LoginForm = () => {

  const handleLogin = e => {
    e.preventDefault()
    const login = {
      user: e.target.user.value,
      password: e.target.password.value
    }
    
    fetch('http://localhost:5000/login', {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <form className="needs-validation" onSubmit={handleLogin} noValidate>
      <div className="mb-3">
        <label htmlFor="inputUser" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          name="user"
          id="inputUser"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please choose a username.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
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
