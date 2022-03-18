<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Joblist({ AddJob }) {

    const [value, setItem] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        AddJob(value);
        setItem("");
    };
    return (

        <div>
            Añade un oficio
            <br />
            <input
                type="text"
                placeholder="tu oficio es ?"
                value={value}
                onChange={e => setItem(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                type="submit">
                añadir
            </button>
        </div>

    );
}
const AddUser = () => {
    const [job, setJob] = useState([
        {

        }
    ]);
    const AddJob = text => {
        const NewJob = [...job, { text }];
        setJob(NewJob)
    };

    const removeTodo = index => {
        const NewJob = [...job];
        NewJob.splice(index, 1);
        setJob(NewJob);
    };

    const [form, setForm] = useState({});
    const [user, setUser] = useState({});
    const handleChange = e => {
        setForm({...form,[e.target.name]: e.target.value,})
        setUser({...user,[e.target.name]: e.target.value,})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        alert("El formulario se envio")
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">RUT Sin digito verificador</label>
                    <input type="text"
                        className="form-control"
                        id="InputName"
                        name='rut'
                        aria-describedby="NameHelp"
                        value={form.run}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Primer Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="InputNameF"
                        name='fname'
                        aria-describedby="NameHelp"
                        value={form.fname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Segundo Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="InputNameS"
                        name='sname'
                        aria-describedby="SnameHelp"
                        value={form.sname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">Apellido Paterno</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastNameF"
                        name='lname'
                        aria-describedby="LastNameHelp"
                        value={form.lName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">Apellido Materno</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastNameM"
                        name='lname2'
                        aria-describedby="LastNameHelp"
                        value={form.lname2}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Numero de contacto</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputContactNumber"
                        name='phone'
                        aria-describedby="ContactNumberHelp"
                        value={form.pphone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Fecha de Nacimiento</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputBday"
                        name='dob'
                        aria-describedby="BdayHelp"
                        value={form.dob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select
                    onChange={handleChange}
                    >
                        <option value="Hombre"> Hombre </option>
                        <option value="Mujer"> Mujer </option>
                        <option value="Otro"> Otro </option>
                        <option value="No_especifico"> Prefiero no decir </option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Url de foto de Perfil</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastName"
                        name='ProfilePicture'
                        aria-describedby="LastNameHelp"
                        value={form.picture}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Direccion de correo</label>
                    <input type="text"
                        className="form-control"
                        id="InputMail"
                        name='Mail'
                        aria-describedby="MailHelp"
                        value={user.mail}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword"
                        name='password'
                        aria-describedby="PasswordHelp"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <br>
                </br>
                <br>
                </br>
                
                <div className="mb-3">
                    <div className="container">
                        <Joblist AddJob={AddJob} />
                        <div>
                            {job.map((job, index) => (
                                <li >
                                    {job.text}
                                    <button className="btn btn-floating"
                                        onClick={() => removeTodo(index)}>
                                        <i className="material-icons">x</i>
                                    </button>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div id="jobHelp" className="form-text">En caso de ser querer publicar un aviso proceder sin actuar</div>
                </div>
                <br>
                </br>
                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="CheckEmployer"
                        value={form.Employer}
                    />
                    <label className="form-check-label" htmlFor="CheckEmployer">Es usted un empleador ?</label>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="CheckCondition" />
                    <label className="form-check-label" htmlFor="CheckCondition">Acepto terminos y condiciones</label>
                </div>

                <div>
                    <Link to="SignUp" className="btn btn-primary"  onClick={handleSubmit}>Registrar</Link>
                </div>

            </form>

=======
import RegisterFormWorker from "./RegisterFormWorker"
import RegisterFormClient from "./RegisterFormClient"

const Register = () => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-worker-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-worker"
            type="button"
            role="tab"
            aria-controls="pills-worker"
            aria-selected="true"
          >
            Trabajador
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-client-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-client"
            type="button"
            role="tab"
            aria-controls="pills-client"
            aria-selected="false"
          >
            Cliente
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-worker"
          role="tabpanel"
          aria-labelledby="pills-worker-tab"
        >
          <RegisterFormWorker />
        </div>
        <div
          className="tab-pane fade"
          id="pills-client"
          role="tabpanel"
          aria-labelledby="pills-client-tab"
        >
          <RegisterFormClient />
>>>>>>> aeb0b47819c9b42e0adfe5c8b232c5a5b2e872ef
        </div>
      </div>
    </>
  );
};

export default Register;
