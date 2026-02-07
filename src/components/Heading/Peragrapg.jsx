import React from 'react'

const peraVariants = {
    flightPera:"text-center px-4 md:px-9 m-auto",
    flightJourney:"mt-3",
    flightFeatureItem:"text-[#626b96]",
    hotelFeatureItem:"text-sm font-medium",
    hotelPera:"mt-2",
    carPage:"pt-1 text-[16px]",
    login:"w-[90%]"
}

function Peragrapg({pera,variants}) {
  return (
    <p className={`${peraVariants[variants]} `}>
      {pera}
    </p>
  )
}

export default Peragrapg
