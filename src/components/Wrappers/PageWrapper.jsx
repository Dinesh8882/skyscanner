import React from 'react'

function PageWrapper({ children }) {
    return (
        <div className='px-[clamp(1rem,4.7vw,90px)]'>
            {children}
        </div>
    )
}

export default PageWrapper
