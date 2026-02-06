import React from 'react'

function   CardWrapper({ children }) {
    return (
        <div className="sm:min-w-75 min-w-70 md:min-w-99 cursor-pointer overflow-hidden bg-white rounded-xl  border border-gray-200 hover:shadow-lg transition">
            {children}
        </div>
    )
}

export default CardWrapper
