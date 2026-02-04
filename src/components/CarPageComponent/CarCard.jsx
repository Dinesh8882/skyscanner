import React from 'react'

function CarCard({ items }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {
                items.map((item) => (
                    <div className='cursor-pointer hover:shadow-[0px_3px_14px_1px_rgba(0,0,0,0.2)] flex flex-col items-center border border-gray-300 rounded-2xl'>
                        <div className='w-58 py-6'>
                            <img src={item.image} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='border-t border-gray-400 w-full p-4 flex items-center justify-between'>
                            <div>
                                <h3 className='font-medium text-xl'>{item.name}</h3>
                                <span className='text-[12px]'>{item.type}</span>
                                <div className='mt-2 px-2 flex gap-5'>
                                    <span className='flex items-center'><item.person />{item.passengers}</span>
                                    <span className='flex items-center'><item.bag />{item.bags}</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <span className='text-gray-500'>From</span>
                                <p className='text-[32px] font-medium'>₹{item.pricePerDay.toLocaleString("en-IN")}</p>
                                <span className='text-gray-500 text-[14px]'>per day</span>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CarCard
