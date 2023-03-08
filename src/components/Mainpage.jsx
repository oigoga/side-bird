import React from 'react'
import Card from './Card'
import Nav from './Nav'
import Engagements from './Engagements'
import Status from './Status'
import Bottom from './Bottom'
const Mainpage = () => {
  return (
    <div className='bg-black  bottom-0'>
    <Card>
        <Nav/>
        <Engagements/>
       <Bottom/>
    </Card>
    </div>
  )
}

export default Mainpage