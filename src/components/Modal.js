import React from 'react'
import {Link} from 'react-router-dom'
const Modal = ({setModal}) => {
  return (
     <div className='w-96 rounded h-52 shadow-2xl gap-5 flex justify-end items-center flex-col bg-slate-900 z-50 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <span className='text-2xl'> LogIn first to add Items In cart</span>
        <Link to="/login" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:text-white'>Login</Link>
        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={()=>setModal(false)}>Close</button>
     </div>
  )
}

export default Modal
