import React from 'react'
import DestinationCard from './DestinationCard'
import { motion } from 'framer-motion'

function CardAnimation({ index, width, itemPerPage, items, useRefGap, useRefWidth }) {
    return (
        <div className='overflow-x-auto no-scrollbar lg:overflow-hidden  mt-5 pb-6'>

            <motion.div
                ref={useRefGap}
                initial={{ x: 0 }}
                animate={{ x: -(index * width * itemPerPage) }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='flex gap-4'>
                {
                    items.map((item, ind) => (
                        <DestinationCard
                            key={item.id}
                            {...item}
                            ref={ind === 0 ? useRefWidth : null}
                        />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default CardAnimation
