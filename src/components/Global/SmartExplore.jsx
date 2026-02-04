import React from 'react'
import PangelHeading from '../Heading/PangelHeading'
import InspirationCard from '../Hotel/InspirationCard'

function SmartExplore({ data, variant }) {
    return (
        <div>
            <PangelHeading title="Plan smart, explore more" variants={variant} />

            <div className='md:grid overflow-x-auto flex no-scrollbar  md:grid-cols-2 mt-12 gap-6'>
                {
                    data.map((item) => (
                        <InspirationCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SmartExplore
