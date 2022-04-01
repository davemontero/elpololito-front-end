import { useState } from "react";
import swal from 'sweetalert';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const RegisterFormClient = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({})

  const handleChangeform = e => {
    setForm({
      ...form, [e.target.name]: e.target.value,
    })
  }

  const handleDate = date => {
    setStartDate(date)
    setForm({
      ...form, 'dob': `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/create-person", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(form)
    })
      .then(response => response.json())
      .then(response => {
        response.status ? (
          swal({
            title: "Exito",
            text: response.msg,
            icon: "success",
            timer: 5000
          })) :
          (
            swal({
              title: "Error",
              text: response.msg,
              icon: "error",
              timer: 5000
            }))
      })
      .catch(err => console.error(err))
  }
  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="inputFirstname" className="form-label">
          Primer Nombre <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputFirstname" name="fname" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputSecondname" className="form-label">
          Segundo Nombre
        </label>
        <input type="text" className="form-control" id="inputSecondname" name="sname" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname" className="form-label">
          Primer Apellido <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="InputLastname" name="lname" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname2" className="form-label">
          Segundo Apellido
        </label>
        <input type="text" className="form-control" id="inputLastname2" name="lname2" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputRUT" className="form-label">
          RUT <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputRUT" name="rut" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputDOB" className="form-label">
          Fecha de nacimiento <span className="input-require">*</span>
        </label>
        <DatePicker selected={startDate} onChange={handleDate} className="form-control" dateFormat="yyyy-MM-dd" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhone" className="form-label">
          Teléfono <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputPhone" name="phone" onChange={handleChangeform} />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputGender" className="form-select" name="gender" onChange={handleChangeform}>
          <option>Elegir...</option>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
          <option value="no binario">Prefiero no decir</option>
        </select>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPhone" className="form-label">
          Mail <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputMail" name="mail" onChange={handleChangeform} />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPhone" className="form-label">
          Password <span className="input-require">*</span>
        </label>
        <input type="password" className="form-control" id="inputPasswordUser" name="password" onChange={handleChangeform} />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Registrar
      </button>
    </form>
  );
};

export default RegisterFormClient;
