import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const LogOut = () => {

    let navigate = useNavigate();

    function handleLogOut() {
        localStorage.clear()
        navigate("/")
        console.log(localStorage)
    }

    return <>
        <a className="nav-link nav-link-btn" onClick={handleLogOut}>
            Log Out
        </a>
    </>
}


export default LogOut;