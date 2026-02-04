import React from 'react'

function LocationTabs({ items, isActiveHandler, activeTab }) {
    
    return (
        <div className='mt-5 overflow-x-auto flex-nowrap no-scrollbar sm:overflow-hidden flex gap-2'>
            {
                items?.map((itm) => (
                    <button key={itm.id} onClick={() => isActiveHandler(itm.value)} 
                    className={`${activeTab === itm.value ? 
                    "bg-[#05203c] text-white" : 
                    "text-[#161616] border border-gray-400 hover:border-[#05203c]"}  
                    text-sm px-4 rounded-md py-1.5 cursor-pointer
                    w-fit whitespace-nowrap
                    `}>
                        {itm.label}
                    </button>
                ))
            }
        </div>
    )
}

export default LocationTabs
