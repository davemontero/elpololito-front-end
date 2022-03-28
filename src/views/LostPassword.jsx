import { useNavigate } from "react-router-dom";
import { useState } from "react"
import swal from 'sweetalert';

const LostPassword = () => {
    let navigate = useNavigate();
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
            .then(data => {
                data.status ? (
                    swal({
                      title:"Exito",
                      text: data.msg,
                      icon:"success",
                      timer:5000
                    }).then(() => navigate('/reset-password'))) :
                    (
                      swal({
                      title:"Error",
                      text: data.msg,
                      icon:"error",
                      timer:5000
                    }))
            })
            .catch((error) => console.error('Error:', error));
    }

    return (
        <main className='forgotPassword-wrapper'>
            <div className="login-title">El pololito</div>
            <div className="forgotPassword-box">
                <form onSubmit={handleSubmit}>
                    <h2 className='mb-3'>Reestablecer contraseña</h2>
                    <div className="mb-4">
                        <label htmlFor="LostMail" className="form-label form-label-white">Ingrese su email</label>
                        <input type="text"
                            className="form-control"
                            id="LostMail"
                            placeholder='ejemplo@dominio.com'
                            value={mail}
                            onChange={changeMail}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default LostPassword;