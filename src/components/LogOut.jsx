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

    return <>
    <Button onClick={handleLogOut} variant="dark">Log Out</Button>{' '}
   </>
}


export default LogOut;