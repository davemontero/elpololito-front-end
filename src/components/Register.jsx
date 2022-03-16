import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, } from "react-bootstrap"



function Joblist({ addTodo }) {

    const [value, setItem] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
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
    const addTodo = text => {
        const NewJob = [...job, { text }];
        setJob(NewJob)
    };

    const removeTodo = index => {
        const NewJob = [...job];
        NewJob.splice(index, 1);
        setJob(NewJob);
    };

    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    console.log(form)
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">RUT Sin digito verificador</label>
                    <input type="text"
                        className="form-control"
                        id="InputName"
                        aria-describedby="NameHelp"
                        value={form.run}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Primer Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="InputName"
                        aria-describedby="NameHelp"
                        value={form.fname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Segundo Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="InputName"
                        aria-describedby="NameHelp"
                        value={form.sname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">Apellido Paterno</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastName"
                        aria-describedby="LastNameHelp"
                        value={form.LastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">Apellido Materno</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastName"
                        aria-describedby="LastNameHelp"
                        value={form.LastName2}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Numero de contacto</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputContactNumber"
                        aria-describedby="ContactNumberHelp"
                        value={form.ContactNumer}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Fecha de Nacimiento</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputContactNumber"
                        aria-describedby="ContactNumberHelp"
                        value={form.Dob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-Genre">
                            Genero
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Hombre</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Mujer</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Otro</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Prefiero no decir</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Url de foto de Perfil</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastName"
                        aria-describedby="LastNameHelp"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Direccion de correo</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastName"
                        aria-describedby="LastNameHelp"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword"
                        aria-describedby="PasswordHelp"
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword2" className="form-label">Repite tu contraseña</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword2"
                        aria-describedby="Password2Help"
                        value={form.Password2}
                        onChange={handleChange}
                    />
                </div>
                <br>
                </br>
                <br>
                </br>
                
                <div className="mb-3">
                    <div className="container">
                        <Joblist addTodo={addTodo} />
                        <div>
                            {job.map((job, index) => (
                                <li >
                                    {job.text}
                                    <button className="btn btn-floating"
                                        onClick={() => removeTodo(index)}>
                                        <i class="material-icons">x</i>
                                    </button>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div id="jobHelp" className="form-text">En caso de ser querer publicar un aviso proceder sin actuar</div>
                </div>
                <br>
                </br>
                <div class="mb-3 form-check">
                    <input type="checkbox" 
                    class="form-check-input" 
                    id="CheckEmployer"
                    value={form.Employer}
                    />
                    <label class="form-check-label" for="CheckEmployer">Es usted un empleador ?</label>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="CheckCondition" />
                    <label class="form-check-label" for="CheckCondition">Acepto terminos y condiciones</label>
                </div>

                <div>
                    <Link to="SignUp" className="btn btn-primary">Inciar Sesion</Link>
                </div>

            </form>

        </div>

    );
}
export default AddUser;