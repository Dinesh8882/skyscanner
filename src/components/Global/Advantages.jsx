import React from 'react'

function Advantages({ icon:img, title, description }) {
    return (
        <div>
            <div className='flex justify-center'>
                <div className={`w-46 h-46 mb-12`}>
                    <img src={img} className='w-full h-full ' alt="img" />
                </div>
            </div>
            <h2 className='text-center font-medium text-2xl mb-3'>{title}</h2>
            <p className='text-center text-md'>{description}</p>
        </div>
    )
}


export default Advantages
