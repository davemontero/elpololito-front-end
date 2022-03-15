import React from 'react';


const LostPassword = () => {

    return <>
        <div className="container">
            <h2>Restablecer contraseña</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="InputMail" className="form-label">Su email</label>
                    <input type="text"
                        className="form-control"
                        id="InputEmail"
                        aria-describedby="EmailHelp"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                    <input type="password"
                        className="form-control"
                        id="InputPassword"
                        aria-describedby="PasswordHelp"
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    </>
}

export default LostPassword;