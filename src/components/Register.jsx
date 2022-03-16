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

    const [form, setForm] = useState({

    }

    );

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se envio")
    };

    console.log(form)
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">RUT Sin digito verificador</label>
                    <input type="text"
                        className="form-control"
                        id="InputName"
                        name='Run'
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
                        name='Name'
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
                        name='Sname'
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
                        name='LastNameF'
                        aria-describedby="LastNameHelp"
                        value={form.LastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">Apellido Materno</label>
                    <input type="text"
                        className="form-control"
                        id="InputLastNameM"
                        name='LastNameM'
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
                        name='ContactNumber'
                        aria-describedby="ContactNumberHelp"
                        value={form.ContactNumer}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Fecha de Nacimiento</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputBday"
                        name='BirthDay'
                        aria-describedby="BdayHelp"
                        value={form.Bday}
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
                        value={form.Mail}
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
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword2" className="form-label">Repite tu contraseña</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword2"
                        name='password2'
                        aria-describedby="Password2Help"
                        value={form.Password2}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputContactNumber" className="form-label">Numero de contacto</label>
                    <input type="Integer"
                        className="form-control"
                        id="InputContactNumber"
                        name='Numero de contacto'
                        aria-describedby="ContactNumberHelp"
                        value={form.ContactNumer}
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
                    <Link to="SignUp" className="btn btn-primary"  onClick={handleSubmit}>Registrar</Link>
                </div>

            </form>

        </div>

    );
}
export default AddUser;