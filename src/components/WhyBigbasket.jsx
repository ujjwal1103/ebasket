import React from 'react'
import easyreturn from '../assets/easyreturn.jpg'
import delivery from '../assets/delivery.png'
import price from '../assets/bestprice.webp'
const WhyBigbasket = () => {
  return (
    <div className='m-2 flex  justify-between items-center'>
        
        <div className='flex flex-col items-center justify-center'>
        <img src={delivery} alt="" className='w-24 h-24'/>
          <h5 className='font-semibold my-2'>Superfast Delivery</h5>
           
        </div>
        <div className='flex flex-col items-center justify-center'>
        <img src={price} alt="" className='w-24 h-24'/>
          <h5 className='font-semibold my-2'>
            Best Prices & Offers
          </h5>
           
        </div>
      
        <div className='flex flex-col items-center justify-center'>
          <img src={easyreturn} className='w-24 h-24'/>
            <h5 className='font-semibold my-2'>
            Easy Returns
            </h5>
        </div>
    </div>
  )
}

export default WhyBigbasket