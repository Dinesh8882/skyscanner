import React, { useEffect, useRef, useState } from 'react'
import PangelHeading from '../Heading/PangelHeading'

import FlightSearchForm from '../SearchPanel/FlightSearchForm'

function BookingSearch({ img, title, variants }) {
    const [isXL, setIsXL] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsXL(window.innerWidth >= 1280);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div
            className={`
                xl:py-20 w-full pb-4 xl:pb-37.5 
                bg-cover relative bg-center 
                px-[clamp(1rem,4.7vw,90px)] 
                bg-no-repeat flex flex-col 
                justify-center
                bg-[#05203c]
                `}
            style={{
                backgroundImage: isXL ? `url(${img})` : "none",
            }}
        >
            <PangelHeading title={title} variants="flight" />
            <FlightSearchForm variants={variants} />

        </div>
    )
}

export default BookingSearch
