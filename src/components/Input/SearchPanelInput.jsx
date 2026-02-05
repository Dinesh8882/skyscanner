import React from 'react'

function SearchPanelInput({ label, type, name, placeholder }) {
    return (
        <div className={`flex flex-col px-2 py-3 bg-white col-span-2
            ${type === "date" && "hidden md:block"}
            ${label === 'From' && "rounded-t-xl md:rounded-l-xl md:rounded-t-none col-span-2"}
            ${label === "Travellers & Class" && "rounded-r-xl"}`
        }>
            <label className='hidden md:block' htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} className='outline-none' />
        </div>
    )
}

export default SearchPanelInput
