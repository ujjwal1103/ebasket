import {Outlet,Navigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import AuthService from '../services/auth.service'
const ProtectedRoutes = () => {
    let user = AuthService.getCurrentUser()
    console.log(user);
  return (
     user ? <Outlet/> : <Navigate to = '/login'/>
  )
}

export default ProtectedRoutes
