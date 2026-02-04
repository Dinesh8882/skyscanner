import React, { useContext } from 'react'
import Navbar from './Navbar'
import { FlightContext } from '../../context/FlightsContext'
import TabButton from '../Buttons/TabButton'


import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiHotelFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";


const tabIcons = [
    { tabName: "Flights", icon: BiSolidPlaneAlt, link: "/flights" },
    { tabName: "Hotels", icon: RiHotelFill, link: "/hotels" },
    { tabName: "Car hire", icon: FaCarSide, link: "/carhire" }
]


function CombineNavbar() {
    const { switchTab, activeLink } = useContext(FlightContext)

    return (
        <div className='px-[clamp(1rem,4.7vw,90px)] pt-11 pb-5 bg-[#05203c]'>
            <Navbar />
            <div className='overflow-x-auto no-scrollbar sm:overflow-hidden flex  gap-[3px] mt-7 '>
                {tabIcons.map((item, index) => (
                    <TabButton
                        itemName={item.tabName}
                        key={index}
                        iconName={item.icon}
                        tabLink={item.link}
                        tabButton={switchTab}
                        active={activeLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default CombineNavbar
