import React from 'react'
import { MdError } from "react-icons/md";

const carVariants = {
    carPage: "bg-[#eff3f8] items-start",
    flightPage: "border border-gray-400 mt-8 items-center"
}

function InfoBanner({ children, variants }) {
    return (

        <div className={`px-2 py-1 rounded-md flex  gap-2 ${carVariants[variants]}`}>
            <div className={`${variants === "carPage"?"pt-0.5 ":""}`}>
                <MdError className={`rotate-180 text-gray-500`} />

            </div>
            {children}
        </div>
    )
}

export default InfoBanner
