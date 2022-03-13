import React, { useState } from 'react';
import RegisterModal from "../components/RegisterModal"



const SignUp = () => {

    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Direccion de correo</label>
                    <input type="text"
                        className="form-control"
                        id="InputMail"
                        aria-describedby="MailHelp"
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
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
                <br>
                </br>
                <br>
                </br>
                <div>
                    <RegisterModal />

                </div>
            </form>
        </div>


    );
}

export default SignUp;