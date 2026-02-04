import React from 'react'

function FlightBenefits({ icon: Icon, title, description ,id}) {
    return (
        <div className='border border-gray-300 rounded-2xl px-7 py-5'>
            <Icon className={`mb-4 ${id === 1 ? "rotate-45 text-2xl":"text-xl"}`} />
            <h1 className='font-medium text-xl'>{description}</h1>
        </div>
    )
}

export default FlightBenefits
