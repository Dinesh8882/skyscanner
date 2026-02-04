import React from 'react'

function Facts({ icon: Icon, title, value, variants }) {
    return (
        <div className='flex flex-col gap-1 w-[clamp(130px,30vw,300px)]'>
            <Icon className="text-xl" />
            <h2>{title}</h2>
        <span className={`font-medium text-xl ${variants === "carPage" && "relative under-line-animation w-fit"}`}>{value}</span>
        </div>
    )
}

export default Facts
