import React, { forwardRef } from 'react'
import CardWrapper from '../CardWrapper/CardWrapper'

const DestinationCard = forwardRef(function DestinationCard({ city, country, price, image }, ref) {
    return (
        <CardWrapper>
            <div ref={ref} className=''>
                <div className='w-full h-50'>
                    <img src={image} alt={city} className='w-full h-full object-cover' />
                </div>
                <div className='p-4 flex justify-between'>
                    <div>
                        <h2 className='font-medium text-xl'>{city}</h2>
                        <span className='text-[12px]'>{country}</span>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='text-[11px] text-gray-500'>From</span>
                        <span className='text-xl font-medium leading-tight'>₹{price}</span>
                        <span className='text-[11px] text-gray-500'>a night</span>
                    </div>
                </div>
            </div>
        </CardWrapper>
    )
})

export default DestinationCard
