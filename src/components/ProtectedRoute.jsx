import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const useAuth = () => {

  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    return true
  }
  else {
    return false
  }
}


const ProtectedRoutes = () => {

  const auth=useAuth()
	

  return auth?<Outlet/>: <Navigate to="/landing"/>

}


export default ProtectedRoutes