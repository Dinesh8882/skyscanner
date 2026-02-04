import React from 'react'
import { flightOptions } from '../../config/checkBox.config'
import SearchCheckBox from '../Input/SearchCheckBox'
import { inputConfig } from '../../config/input.config'
import SearchPanelInput from '../Input/SearchPanelInput'
import Return from '../Buttons/Return'

const flightSearchVariant = {
    flight: "",
    home: "mt-0"
}

function FlightSearchForm({ variants }) {
    return (
        <div className={`bg-[#05203c] rounded-md pb-2 ${flightSearchVariant[variants]} ${variants !== "home" && "xl:px-5"} ${(variants !== "home" && variants !== "flight") && "py-4"}`}>
            {(variants === "home" || variants === "flight") && <Return />}
            <div className='grid md:grid-cols-11 mt-2 gap-0.5 md:gap-1'>

                {
                    inputConfig.map((item, index) => (
                        <SearchPanelInput
                            key={index}
                            {...item}

                        />
                    ))
                }
                <button className='bg-[#0062e3] text-white ml-3 hidden md:block rounded-xl'>Search</button>
            </div>

            <div className='flex flex-col md:grid md:grid-cols-11 gap-[clamp(2px,0vw,1rem)] mt-2 '>
                {
                    flightOptions.map((item, index) => (
                        <SearchCheckBox
                            key={item.id}
                            checkBoxType={item.type}
                            label={item.label}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <button className='bg-[#0062e3] text-white md:hidden w-full py-3 mt-4 md:mt-0 rounded-xl'>Search</button>

        </div>
    )
}

export default FlightSearchForm
