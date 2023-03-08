import React from 'react'
import Status from './Status'
import Events from './Events'
const Bottom = () => {
  return (
    <>
        <div className='mt-20 font-Inter pb-11 flex flex-col md:flex-row bg-black'>
            <Status/>
            <Events/>
        </div>
    </>
  )
}

export default Bottom