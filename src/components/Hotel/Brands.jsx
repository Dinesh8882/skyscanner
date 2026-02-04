import React from 'react'

function Brands({ items, label }) {
  return (
    <div className='flex flex-wrap gap-3 sm:gap-6 mt-10'>

      {
        items.map((item) => (
          <div key={item.id} className='overflow-hidden rounded-[9px] cursor-pointer'>
            <img  src={item.image} alt={item.label} className='' />
          </div>
        ))
      }
    </div>
  )
}

export default Brands
