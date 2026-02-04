import React from 'react'

const cardVariants = {
    flight: ""
}

function HighlightCard({ items, variants }) {
    return (
        <div className=' flex overflow-x-auto no-scrollbar lg:overflow-hidden lg:grid lg:grid-cols-3 flex-nowrap mt-10 gap-4'>
            {
                items.map(({ id, icon: Icon, description, title }) => (
                    <div key={id} className='border w-[320px] lg:w-auto shrink-0 border-gray-300 rounded-2xl px-7 py-5'>
                        <Icon className={`mb-4 ${id === 1 && variants === "flight" ? "rotate-45 text-2xl" : "text-xl"}`} />
                        <h1 className='font-medium text-xl'>{description}</h1>
                        {
                            variants === "carPage" && <p
                                className='relative 
                                inline-block
                                after:content-[""] 
                                after:absolute
                                after:h-px 
                                after:w-full 
                                after:bg-black 
                                after:bottom-0 
                                after:left-0 
                                cursor-pointer 
                                hover:after:w-0
                                after:transition-all
                                after:duration-200
                                mt-4'
                            >{title}</p>
                        }
                    </div>
                ))
            }
        </div >
    )
}

export default HighlightCard
