import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaEarthEurope } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FlightContext } from '../../context/FlightsContext';
import Button from '../Buttons/Button';



function RightNavbar() {
    const { activeLink } = useContext(FlightContext)
    const {loginHandler } = useContext(FlightContext)

    return (
        <div className='text-white flex items-center gap-4'>
            <NavLink to='#' className="text-sm hidden md:block font-medium">Help</NavLink>
            {
                activeLink === '/' ? (
                    <>
                        <NavLink to='#'><FaEarthEurope className='text-xl' /></NavLink>
                    </>
                ) : (
                    <>
                        <Button name="English (UK) India INR" variant="secondary" />
                        <IoPersonCircleOutline onClick={loginHandler} className='text-2xl md:hidden' />
                    </>
                )
            }
            <NavLink to='#'><GoHeartFill className='text-xl' /></NavLink>
            {
                activeLink === '/' ? (
                    <NavLink to='#' className="md:flex items-center  gap-1" onClick={loginHandler}><IoPersonCircleOutline className='text-2xl' /><span className='hidden md:block'>Log in</span></NavLink>
                ) : <Button name="Log in" variant="login" />
            }


        </div>
    )
}

export default RightNavbar
