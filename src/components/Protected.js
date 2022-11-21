import {Outlet,Navigate} from 'react-router-dom'

import AuthService from '../services/auth.service'
const Protected = () => {
    let user = AuthService.getCurrentUser()
   
  return (
     user && user !== undefined ? < Navigate to="/home"/> : <Outlet/> 
  )
}

export default Protected
