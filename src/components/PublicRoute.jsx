import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
	

const useAuth = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      return true
    }
    else {
      return false
    }
  }
  
	

	const  PublicRoutes=() =>{
	
	  const auth=useAuth()
	
	  return auth?<Navigate to="/home"/>: <Outlet/>
	}
	

	export default PublicRoutes;;