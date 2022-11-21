import {Outlet,Navigate} from 'react-router-dom'

import AuthService from '../services/auth.service'
const AdminOnly = () => {
    let user = AuthService.getCurrentUser()
    console.log(user.roles)
  return (
     user.roles.includes("ROLE_ADMIN") ? <Outlet/> : <Navigate to = '/Error'/>
  )
}

export default AdminOnly
