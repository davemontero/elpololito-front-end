import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterFormClient = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({})
  const [user, setUser] = useState({})



  const handleChangeform = e => {
    setForm({
      ...form, [e.target.name]: e.target.value,
    })
  }
  const handleChangeUser = e => {
    setUser({
      ...user, [e.target.name]: e.target.value,
    })
  }

  console.log(form)
  console.log(user)

  function handleSubmit(event) {
    event.preventDefault();
    console.log('form', form)
    fetch("http://localhost:5000/create-person", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(form)
    })
      .then(response => {
        response.json().then(data => setUser({...user, pid:data.person_id}));
      })
      .catch(err => {
        console.error(err);
      });
      console.log(user)
      fetch("http://localhost:5000/create-user", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(user)
    })
      .then(response => {
        console.log(response.json().then(data => console.log(data)));
      })
      .catch(err => {
        console.error(err);
      });
    

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
        <input type="text" className="form-control" id="inputdob" name="dob" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhoto" className="form-label">
          Foto <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputPhoto" name="photo" onChange={handleChangeform} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputGender" className="form-label">
          Genero <span className="input-require">*</span>
        </label>
        <select id="inputGender" className="form-select" name="gender" onChange={handleChangeform}>
          <option>Elegir...</option>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
          <option value="Prefiero no decir">Prefiero no decir</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhone" className="form-label">
          Teléfono <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputPhone" name="phone" onChange={handleChangeform} />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPhone" className="form-label">
          Mail <span className="input-require">*</span>
        </label>
        <input type="text" className="form-control" id="inputMail" name="mail" onChange={handleChangeUser} />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPhone" className="form-label">
          Password <span className="input-require">*</span>
        </label>
        <input type="password" className="form-control" id="inputPasswordUser" name="password" onChange={handleChangeUser} />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Registrar
      </button>
    </form>
  );
};

export default RegisterFormClient;
