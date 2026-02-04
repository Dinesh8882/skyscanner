import React from 'react'

const buttonVariants = {
    flight: "bg-[#05203c]  mt-8 text-white text-md",
    secondary: "bg-[#1e3750] text-white text-[12px] hidden md:block",
    login:"bg-[#e0e4e9] hidden md:block text-black text-sm"
}

function Button({ name, variant }) {
    return (
        <button className={`${buttonVariants[variant]}  px-6.5 rounded-md font-medium py-1.5 cursor-pointer`}>
            {name}
        </button>
    )
}

export default Button
