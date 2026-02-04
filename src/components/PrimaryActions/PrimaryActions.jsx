import React from 'react'
import { NavLink } from 'react-router-dom'

function PrimaryActions({ icon: Icon, label ,id}) {
    return (
        <NavLink className={`
              bg-[#05203c] 
                w-[clamp(135px,29vw,140px)] 

                shrink-0 
                flex-col
                text-white  
                px-4 py-4 ${id === 3 ?"gap-3  ":"gap-7"}
                justify-center
                rounded-xl flex 
                items-start


                sm:shrink
                sm:px-6
                sm:gap-7
                sm:w-auto
                


                lg:flex-row
                lg:justify-start
                lg:gap-2
                lg:py-7
                

        `}>
            <Icon className="text-xl" />
            <h3 className='text-sm font-medium'>{label}</h3>
        </NavLink>
    )
}

export default PrimaryActions
