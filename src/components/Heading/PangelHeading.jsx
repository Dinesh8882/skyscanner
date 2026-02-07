import React from 'react'


const headingVariants = {
  home: "text-3xl text-white hidden md:block",
  FAQ: "mb-6 text-black text-[32px]",
  country: "mb-6 mt-12 text-black text-2xl",
  flight: "mb-4 xl:mb-7 text-[32px] xl:text-[64px] text-white",
  flightHeading: "mt-[4rem] md:mt-[6rem] text-[24px] md:text-[32px]",
  FAQFlight: "mt-[4rem] md:mt-[6rem]  text-[24px] md:text-[32px] tracking-tight",
  flightBenifits: "text-center text-[32px]",
  flightJourney: "mt-[6rem] text-2xl",
  flightFeatureItem: "text-xl mb-2",
  moreOption: "mt-[8rem] text-2xl",
  hotel: "text-gray-800 mt-[2rem] md:mt-[6rem] text-[24px] sm:text-4xl ",
  hotelLocation: "mt-[6rem] text-2xl",
  carPage: " text-[24px] sm:text-[32px] mt-24",
  carPageTab: "mt-24 text-[24px]",
  popularCarRent: "text-[24px] sm:text-4xl",
  default: "text-white text-[32px]",
  login:"text-[32px] mb-5 mt-6"
}

function PangelHeading({ title, variants = "default" }) {
  return (
    <h1
      className={`${headingVariants[variants]} font-medium tracking-tight leading-tight  xl:leading-none`}>
      {title}
    </h1>
  )
}

export default PangelHeading
