import React from 'react'

const dotsVariants = {
    // hotelDots: "hidden sm:flex"
}

function DotBtns({ pages, slideBtn, index, variant }) {
    return (
        <div className={`justify-center gap-2 mt-6 hidden sm:flex ${dotsVariants[variant]}`}>
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
