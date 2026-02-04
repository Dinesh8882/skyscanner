import React from 'react'

function AnimationWrapper() {
    return (
        <div>
            <motion.div
                ref={destGap}
                initial={{ x: 0 }}
                animate={{ x: -(destIndex * destWidth * destPerPage) }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='flex gap-6'>
                {
                    destinationCards.map((item, ind) => (
                        <DestinationCard
                            key={item.id}
                            {...item}
                            ref={ind === 0 ? destRef : null}
                        />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default AnimationWrapper
