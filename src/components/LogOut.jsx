import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const LogOut = () => {

    let navigate = useNavigate();

    function handleLogOut() {
        localStorage.clear()
        navigate("/")
        console.log(localStorage)
         }
console.log(localStorage)
    return <>
    <Button className="nav-link-btn-dark nav-link-btn" onClick={handleLogOut} variant="dark">Cerrar Sesión</Button>{' '}
   </>
}


export default LogOut;