import React from 'react'
import { Activity, Twitter, Dashboard, Settings, Write, Image } from '../assets'
const Nav = () => {
  return (
   <>
    <div className=' flex text-white py-2 justify-between md:fixed md:left-0 md:flex-col md:mx-3'>
        <div className='my-6 md:mt-16'>
            <img src={Twitter} alt="" />
        </div>
        <div className='flex h-5 my-6 md:mt-40 md:flex-col'>
            <img src={Dashboard} alt="" className='mx-[5%] md:my-[20%]' />
            <img src={Write} alt="" className='mx-[5%] md:my-[20%]' />
            <img src={Activity} alt="" className='mx-[5%] md:my-[20%]'/>
            <img src={Settings} alt="" className='mx-[5%] md:my-[5%]' />
        </div>
        <div className='my-4 md:mt-64 '>
            <img src={Image} alt="" />
        </div>
    </div>
   </>
  )
}

export default Nav