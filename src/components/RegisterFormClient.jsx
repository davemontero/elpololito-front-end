import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterFormClient = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({});
  const [form, setForm] = useState({});
  const handleChange = e => {
    setChecked(!checked)
    setForm({ ...form, [e.target.name]: e.target.value, })
    setUser({ ...user, [e.target.name]: e.target.value, })
  }
  function handleSubmit(event) {
    
    event.preventDefault();
    console.log(form)
    console.log(user)
    fetch("http://localhost:5000/create-person", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(form)
    })
      .then(response => {
        console.log(response.json().then(data => console.log(data.pid)));
      })
      .catch(err => {
        console.error(err);
      });
  }


  console.log(form)
  console.log(user)

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="inputFirstname" className="form-label">
          Primer Nombre <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputFirstname" name="firstname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputSecondname" className="form-label">
          Segundo Nombre
        </label>
        <input type="text" className="form-control" id="inputSecondname" name="secondname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname" className="form-label">
          Primer Apellido <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="InputLastname" name="lastname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname2" className="form-label">
          Segundo Apellido
        </label>
        <input type="text" className="form-control" id="inputLastname2" name="lastname2" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputRUT" className="form-label">
          RUT <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputRUT" name="rut" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputDOB" className="form-label">
          Fecha de nacimiento <span className="input-require">*</span>
        </label>
        <DatePicker
          id="inputDOB"
          name="dob"
          className="form-control"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        ></DatePicker>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhone" className="form-label">
          Teléfono <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputPhone" name="phone" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputGender" className="form-select" name="gender">
          <option>Elegir...</option>
          <option value={"Mujer"}>Mujer</option>
          <option value={"Hombre"}>Hombre</option>
          <option value={"No Binario"}>Prefiero no decir</option>
        </select>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputMail" className="form-label">
          E-mail <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputMail" name="mail" />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword" className="form-label">
          Contraseña <span className="input-require">*</span>
        </label>
        <input type="password" className="form-control" id="inputPassword" name="password" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" name="check" checked={checked} onChange={handleChange} />
          <label className="form-check-label" htmlFor="gridCheck">
            He leido los terminos y condiciones
          </label>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default RegisterFormClient;
