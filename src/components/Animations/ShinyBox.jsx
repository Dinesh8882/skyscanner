import React from 'react'
import { motion } from 'framer-motion'

const ShinyBoxVariants = {
    flightDes: 'h-[250px]'
}

function ShinyBox({ variant }) {
    return (
        <div className={`${ShinyBoxVariants[variant]} mt-6  relative overflow-hidden bg-neutral-500 rounded-lg`}>
            <motion.div
                className='
                absolute inset-0
                bg-linear-to-r
                from-neutral-500
                via-neutral-400
                to-neutral-500'
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            ></motion.div>
        </div>
    )
}

export default ShinyBox
