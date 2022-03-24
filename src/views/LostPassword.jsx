import { useState } from 'react';

const LostPassword = () => {
    const [mail, setMail] = useState("");

    const changeMail = (event) => {
        setMail(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:5000/password-recovery', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mail: mail})
        })
            .then(response => response.json())
            .then(data => console.log(data.msg))
            .catch((error) => {
                console.error('Error:', error)});
    }

    return <>
        <div className="container">
            <h2>Restablecer contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="LostMail" className="form-label">Ingrese su email</label>
                    <input type="text"
                        className="form-control"
                        id="LostMail"
                        aria-describedby="MailHelp"
                        value={mail}
                        onChange={changeMail}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar correo de recuperación</button>
            </form>
            <br />
            <br />
            <p>Un correo le será enviado para restablecer la contraseña.</p>
        </div>
    </>
}



export default LostPassword;