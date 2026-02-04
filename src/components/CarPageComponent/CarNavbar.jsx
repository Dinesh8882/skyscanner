import React from 'react'

const carNavItems = [
    "Car hire deals from ₹ 3,980",
    "The best New Delhi car hire providers",
    "Fast facts",
    "How to find the best deal",
    "FAQs"
]
function CarNavbar() {
    return (
        <div className='overflow-x-auto no-scrollbar lg:overflow-hidden flex flex-nowrap w-full z-50 bg-white  mt-24 sticky top-0 px-8 gap-12 border-b border-gray-300 py-3'>
            {
                carNavItems.map((item, index) => (
                    <p className='cursor-pointer w-fit whitespace-nowrap text-[#626971]' key={index}>{item}</p>
                ))
            }
        </div>
    )
}

export default CarNavbar
