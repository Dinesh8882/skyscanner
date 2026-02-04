import React from 'react'

import { IoIosArrowForward } from "react-icons/io";


function FlightCard({ img, city, country, flights, flightPric }) {
    return (
        <div className='mt-8 rounded-xl cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-300 '>
            <div className="img h-37.5">
                <img src={img} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='px-3 pt-3 pb-6'>
                <div>
                    <h2 className='font-medium text-[20px]'>{city}</h2>
                    <span className='text-gray-400 text-sm'>{country}</span>
                </div>
                {
                    flights.map((item, index) => (
                        <div key={index} className='flex justify-between '>
                            <div className='mb-4'>
                                <span className='font-medium text-[16px]'>{item.date}</span>
                                <p className='text-gray-500 text-[12px]'>{item.route} with {item.airline}</p>
                            </div>
                            <p className='font-bold text-[12px]'>Direct</p>
                        </div>
                    ))
                }
                <div className='float-right mb-4'>
                    <p className='text-[#0062e3] text-md font-medium flex gap-1 items-center'>from
                        <span className='font-bold'>₹ </span>
                        {flightPric}
                        <IoIosArrowForward className='font-bold'/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlightCard
