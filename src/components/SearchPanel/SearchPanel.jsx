import React from 'react'
import PangelHeading from '../Heading/PangelHeading'

import FlightSearchForm from './FlightSearchForm'

function SearchPanel({ variants }) {


    return (
        <div className='bg-[#05203c] px-[clamp(1rem,4.7vw,90px)]  pb-11'>
            <PangelHeading title="Millions of cheap flights. One simple search." variants="home" />
            <FlightSearchForm variants={variants} />
        </div>
    )
}

export default SearchPanel
