import React from 'react'
import { Views, Emoji } from '../assets'
const Events = () => {
  return (
    <>
        <div className='flex flex-col  justify-around rounded-3xl bg-midnight1 mt-10 md:mt-0 md:mx-[2%] font-Inter px-[10%] pb-60 w-full md:w-2/3'>
            <div className='flex justify-between py-11'>
                <h3 className='text-2xl font-semibold'>Upcoming Events</h3>
                <button className='flex mt-2 text-xs'><img src={Views} alt="" className='h-2.5 mt-0.5'/> <span className='font-light mx-1'>See All</span></button>
            </div>
            <div className='flex flex-col items-center mt-10'>
                <h4 className='flex font-bold text-lg '>
                    No events for now <span><img src={Emoji} alt="" /></span>
                </h4>
                <p className='text-gray text-center'>Start tweeting to see events appearing here</p>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default Events