import React from 'react'
import FAQSection from './FAQItems'


const faqVariants = {
    flightFAQ: "max-w-3xl grid grid-cols-1 text-[16px] sm:text-[20px] mt-3"
}

function FAQColumn({ data, isOpenHandler, variants }) {
    return (
        <div className={`${faqVariants[variants]}`}>
            {
                data.map((item) => {
                    return (
                        <FAQSection
                            onClickHandler={isOpenHandler}
                            id={item.id}
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={item.isOpen}
                        />
                    )
                })
            }
        </div>
    )
}

export default FAQColumn
