import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterFormClient = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }


  const handleUser = (e) => {
    e.preventDefault()
    console.log(e.target.firstname.value)
    console.log(e.target.secondname.value)
    console.log(e.target.lastname.value)
    console.log(e.target.lastname2.value)
    console.log(e.target.rut.value)
    console.log(e.target.dob.value)
    console.log(e.target.phone.value)
    console.log(e.target.address.value)
    console.log(e.target.address2.value)
    console.log(e.target.city.value)
    console.log(e.target.gender.value)
    console.log(e.target.check.checked)
  }


  return (
    <form className="row g-3" onSubmit={handleUser}>
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
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Dirección <span className="input-require">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Av. Irarrazabal 1350"
          name="address"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">
          Dirección 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Departamento, oficina, piso"
          name="address2"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          Ciudad <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputCity" name="city" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputGender" className="form-select" name="gender">
          <option>Elegir...</option>
          <option value={1}>Mujer</option>
          <option value={2}>Hombre</option>
          <option value={3}>Prefiero no decir</option>
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" name="check" checked={checked} onChange={handleChange}/>
          <label className="form-check-label" htmlFor="gridCheck">
            He leido los terminos y condiciones
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default RegisterFormClient;