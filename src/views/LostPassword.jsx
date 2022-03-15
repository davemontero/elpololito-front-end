import React, {useState, useEffect} from 'react';


const LostPassword = () => {

    useEffect(() => {


        // Sé que estp está mal, pero tuve que salir antes de seguir weando con los métodos ups... a la noche lo termino!
        fetch('http://localhost:3306/password-recovery')
            .then(response => response.json())
            .then(data =>  console.log(data));
            //aaaaa
    
    }, []);
    const [mail, setMail] = useState ("");

    const changeMail = (event) => {
        setMail(event.target.value);
      };

      function handleSubmit(event) {
        event.preventDefault();
      }

    return <>
        <div className="container">
        <br />
        <br />
        <br />
            <h2>Restablecer contraseña</h2>
            <br />
            <br />
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