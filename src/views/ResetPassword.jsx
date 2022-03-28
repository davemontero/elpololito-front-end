import { useState } from "react"

const ResetPassword = () => {
    const [passwd, setPasswd] = useState('')
    const [passwd2, setPasswd2] = useState('')
    const handleChange = e => setPasswd(e.target.value)
    const handleChange2 = e => setPasswd2(e.target.value)
    
    return(
        <main className='forgotPassword-wrapper'>
            <div className="login-title">El pololito</div>
            <div className="forgotPassword-box">
                <form>
                    <h2 className='mb-3'>Ingresar nueva contraseña</h2>
                    <div className="mb-4">
                        <label htmlFor="inputPassword" className="form-label form-label-white">Nueva contraseña</label>
                        <input type="password"
                            className="form-control"
                            name="inputPassword"
                            value={passwd}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inputPassword2" className="form-label form-label-white">Confirmar nueva contraseña</label>
                        <input type="password"
                            className="form-control"
                            name="inputPassword2"
                            value={passwd2}
                            onChange={handleChange2}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default ResetPassword