import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterFormClient = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputFirstname" className="form-label">
          Primer Nombre <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputFirstname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputSecondname" className="form-label">
          Segundo Nombre
        </label>
        <input type="text" className="form-control" id="inputSecondname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname" className="form-label">
          Primer Apellido <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="InputLastname" />
      </div>
      <div className="col-md-6">
        <label htmlFor="InputLastname2" className="form-label">
          Segundo Apellido
        </label>
        <input type="text" className="form-control" id="inputLastname2" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputRUT" className="form-label">
          RUT <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputRUT" />
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
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Dirección <span className="input-require">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Av. Irarrazabal 1350"
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
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          Ciudad <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputGender" className="form-select">
          <option>Elegir...</option>
          <option>Mujer</option>
          <option>Hombre</option>
          <option>Prefiero no decir</option>
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            He leido los terminos y condiciones
          </label>
        </div>
      </div>
    </form>
  );
};

export default RegisterFormClient;
