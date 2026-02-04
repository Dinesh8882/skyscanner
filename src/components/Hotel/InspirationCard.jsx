import React from 'react'
import { motion } from 'framer-motion'

function InspirationCard({ title, publishedAt, source, coverImage, slug }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            className='mb-2 cursor-pointer '>
            <div
                className='h-56 w-[clamp(90px,70vw,389px)] md:w-full overflow-hidden relative'>
                <motion.img
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.15 }
                    }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    src={coverImage}
                    className='w-full h-full object-cover'
                    alt={slug} />

                <motion.span
                    variants={{
                        rest: { backgroundColor: "rgba(0, 0, 0, 0)" },
                        hover: { backgroundColor: "rgba(0, 0, 0, 0.4)" }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='absolute left-0 top-0 h-full w-full'
                ></motion.span>
            </div>
            <h1 className='text-xl md:text-2xl font-medium mt-4'>{title}</h1>
            <p className='flex items-center text-sm mt-2'>{publishedAt}
                <span className='w-0.75 h-0.75 rounded-full bg-gray-500 mx-1'> </span>
                <span className='text-blue-700'>{source}</span>
            </p>
        </motion.div>
    )
}

export default InspirationCard
