import React, { useContext } from 'react'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'

function Navbar() {


    return (
        <div className='flex justify-between items-center '>
            <LeftNavbar />
            <RightNavbar />
        </div>
    )
}

export default Navbar
