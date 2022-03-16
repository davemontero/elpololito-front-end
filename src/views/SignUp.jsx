import React, { useState } from 'react';
import RegisterModal from "../components/RegisterModal"
import { Context } from '../store/pololitoContext';


const SignUp = () => {
    const [form, setForm] = useState({});
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value,})}

    const sendUser = () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/oscar", {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(todos)
        })
            .then(response => {
                console.log(response);
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
                        name='mail'
                        value={form.Mail}
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
                        name='pass'
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={console.log('form', form)} className="btn btn-primary">Registrar</button>
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