import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import FlagSection from './FlagSection';

function FAQSection({ question, answer, onClickHandler, id, isOpen, variants }) {

    return (
        <div onClick={() => variants === "site" ? onClickHandler() : onClickHandler(id)} className={`border-gray-300 ${variants === "sites" && "mt-9"} ${isOpen ? "pb-3" : "pb-1"}  overflow-hidden cursor-pointer border-b`}>
            <div className='flex items-center justify-between py-4'>
                <h2 className={`${variants === "sites" ? "text-2xl" : ""} font-medium`}>{question}</h2>
                <div>
                    <IoIosArrowDown className={`${isOpen ? "rotate-180" : "rotate-0"}  transition-all duration-500`} />
                </div>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto " : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className=''
            >
                {
                    variants === "sites" ? (
                        <FlagSection />
                    ) : <span className='text-[15px]'>{answer}</span>
                }
            </motion.div>
        </div >
    )
}

export default FAQSection
