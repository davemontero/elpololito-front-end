import React, { useState } from 'react';
import RegisterModal from "../components/RegisterModal"
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [form, setForm] = useState({});
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value, })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('form', form)
        fetch("http://localhost:5000/login", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(form)
        })
            .then(response => {
                console.log(response.json().then(data=>console.log(data.msg)));
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Direccion de correo</label>
                    <input type="text"
                        className="form-control"
                        id="InputMail"
                        aria-describedby="MailHelp"
                        name='user'
                        value={form.user}
                        onChange={handleChange}
                    />
                    <div id="MailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword"
                        aria-describedby="PasswordHelp"
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Iniciar sesion</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/password-recovery" className="btn btn-primary">Olvidé mi contraseña</Link>
                <br>
                </br>
                <br>
                </br>
            </form>
            <div>
                <RegisterModal />
            </div>
        </div>
    );
}

export default SignUp;