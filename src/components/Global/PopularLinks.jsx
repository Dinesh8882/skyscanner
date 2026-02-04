import React from 'react'

function PopularLinks({ items ,gridCols}) {
    return (
        <div className={`grid transition-transform   ${gridCols}  mt-2`}>
            {
                items?.map((item) => (
                    <p key={item.id} className='text-sm mt-2'>{item.label}</p>
                ))
            }
        </div>
    )
}

export default PopularLinks
