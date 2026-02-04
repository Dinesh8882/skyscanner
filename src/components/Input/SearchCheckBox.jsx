import React from 'react'

function SearchCheckBox({checkBoxType,label,id}) {
    return (
            <label className={`flex items-center text-md  gap-2 text-white
                ${id === "nearbyTo"?"hidden md:flex col-span-6":"col-span-2"}
                ${id === "nearbyFrom" && "hidden md:flex"}
            `}>
                <input type={checkBoxType} className='w-4 h-4'/>
                {label}
            </label>
     )
}

export default SearchCheckBox
