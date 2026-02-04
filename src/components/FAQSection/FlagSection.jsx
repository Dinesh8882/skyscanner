import React from 'react'
import { flightCountries } from '../../config/flags.cofig';


function FlagSection() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        flightCountries.map((item) => (
          <div className='flex items-center gap-2' key={item.code}>
            <div className='h-6 w-6 rounded-full overflow-hidden'>
              <img src={item.flag} className='h-full w-full object-cover' alt={item.text} />
            </div>
            <div className={`flex ${item.code === "GB"?"gap-1":"gap-2"} items-center`}>
              <span>({item.code})</span>
              <p className='text-sm'>{item.code !== "GB" && item.country + " -"}</p>
              <p className='text-sm'>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FlagSection
