import React from 'react'

import { IoIosArrowDown } from "react-icons/io";

const menuItems = [
  { id: 1, label: "Explore", slug: "explore" },
  { id: 2, label: "Company", slug: "company" },
  { id: 3, label: "Partners", slug: "partners" },
  { id: 4, label: "Trips", slug: "trips" },
  { id: 5, label: "International Sites", slug: "international-sites" }
];


function Footer() {
  return (
    <footer className='bg-[#05203c] mt-12 px-[clamp(1rem,4.7vw,90px)] py-[3rem]'>
      <div className=' grid lg:grid-cols-12 grid-cols-1 text-white'>
        <div className='lg:col-span-4 '>
          <p className='bg-[#1e3750] w-full mb-6 lg:mb-0 lg:w-[19rem] px-5 text-sm py-2 rounded-sm cursor-pointer '>
            India - English (UK) - $ INR
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:col-span-6'>
          <div>
            <ul className='flex flex-col gap-3'>
              <li>Help</li>
              <li>Privacy Settings</li>
              <li>Log in</li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-col gap-3'>
              <li>Cookie policy</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
              <li>Company Details</li>
            </ul>
          </div>
        </div>

        <div className='lg:col-span-2 mt-[3rem] lg:mt-0'>
          <ul className='flex flex-col gap-3'>
            {
              menuItems.map((item) => (
                <li key={item.id} className='flex items-center justify-between'>{item.label} <IoIosArrowDown /></li>
              ))
            }
          </ul>
        </div>
      </div>
      <p className='sm:text-center mt-[3rem] text-[12px] text-white'>Cheap flight booking from anywhere, to everywhere</p>
      <p className='sm:text-center  text-[14px] text-white'>© Skyscanner clone made by Dinesh.</p>


    </footer>
  )
}

export default Footer
