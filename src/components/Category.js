import React from 'react'
import { Link } from 'react-router-dom'
import allproduct from '../assets/allproduct.png'
const Category = () => {
  return (
    <div className=' mt-10'>
        <div className='bg-slate-100'>
            <h2 className="text-2xl text-center py-2 border-b-2 text-black font-bold border-black">
                Top Categories
            </h2>
        </div>

        <div className='flex justify-evenly items-center gap-5 p-4 mt-10 drop-shadow-lg flex-wrap'>
            <Link to='/product' className='cursor-pointer text-center flex-col h-48 flex items-center justify-center bg-slate-400 w-52'>
                <div>
                    <img src={allproduct} alt="" className="w-24 h-24 p-2 rounded-full bg-slate-200" />
                </div>
                <h2 className='py-2 text-white'>All Product</h2>
            </Link>
            <Link to='/product/getcategory/fruits&vegetables' className='cursor-pointer text-center flex-col h-48 flex items-center justify-center bg-slate-400 w-52'>
                <div>
                    <img src={allproduct} alt="" className="w-24 h-24 p-2 rounded-full bg-slate-200" />
                </div>
                <h2 className='py-2 text-white'>Fruits & Vegetables</h2>
            </Link>
            <Link to='/product/getcategory/dairy,bread&egg' className='cursor-pointer text-center flex-col h-48 flex items-center justify-center bg-slate-400 w-52'>
                <div>
                    <img src={allproduct} alt="" className="w-24 h-24 p-2 rounded-full bg-slate-200" />
                </div>
                <h2 className='py-2 text-white'>Dairy & Bread</h2>
            </Link>
            <Link to='/product/getcategory/masala,oil&more' className='cursor-pointer text-center flex-col h-48 flex items-center justify-center bg-slate-400 w-52'>
                <div>
                    <img src={allproduct} alt="" className="w-24 h-24 p-2 rounded-full bg-slate-200" />
                </div>
                <h2 className='py-2 text-white'>Masala, Oil & More</h2>
            </Link>
            
        </div>
        
    </div>
  )
}

export default Category
