import React from 'react'

function DotBtns({ pages, slideBtn, index }) {
    return (
        <div className='flex justify-center gap-2 mt-6'>
            {
                [...Array(pages)].map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 rounded-full cursor-pointer h-2 ${index === idx ? "bg-gray-500" : "bg-gray-300"}`}
                        onClick={() => slideBtn(idx)}
                    ></div>
                ))
            }
        </div>
    )
}

export default DotBtns
