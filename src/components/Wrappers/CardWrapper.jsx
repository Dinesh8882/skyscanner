import React from 'react'

function CardWrapper({ children }) {
    return (
        <div className="min-w-99.75 cursor-pointer overflow-hidden bg-white rounded-xl  border border-gray-200 hover:shadow-lg transition">
            {children}
        </div>
    )
}

export default CardWrapper
