import React, { useState } from 'react'
import FAQSection from './FAQItems'
import { leftFaqData, rightFaqData } from '../../config/bookingFaqData.config'
import useToggle from '../../hooks/useToggle'
import useFAQItems from '../../hooks/useFAQItems'
import FAQColumn from './FAQColumn'

function FAQAccordion() {
    const { toggle, togglerHandler } = useToggle(false)
    const { isOpenHandler: leftHandler, data: leftData } = useFAQItems(leftFaqData)
    const { isOpenHandler: rightHandler, data: rightData } = useFAQItems(rightFaqData)



    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                <FAQColumn data={leftData} isOpenHandler={leftHandler} />
                <FAQColumn data={rightData} isOpenHandler={rightHandler} />
            </div>
            <FAQSection
                isOpen={toggle}
                onClickHandler={togglerHandler}
                question="Our international sites"
                variants="sites"
            />
        </div>
    )
}

export default FAQAccordion
