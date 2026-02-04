import React, { useContext } from 'react'

import img from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FlightContext } from '../../context/FlightsContext'

function LeftNavbar() {
  const { switchTab } = useContext(FlightContext)
  return (
    <NavLink to='/' onClick={() => switchTab("/")}>
      <img src={img} alt="Skyscanner" className='w-[173px]' />
    </NavLink>
  )
}

export default LeftNavbar
