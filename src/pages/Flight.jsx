import React, { useEffect } from 'react'
import BookingSearch from '../components/Flight/BookingSearch'
import img from '../assets/Large-Flights-hero-2.webp'
import {
  flightAdvantages,
  flightDestinations,
  flightFaqs,
  flightFeatures,
  flightKeyPoints,
  flightLocationTabs,
  popularFlightDestinations
} from '../config/flight.config'
import PangelHeading from '../components/Heading/PangelHeading'
import FlightCard from '../components/Flight/FlightCard'
import Buttons from '../components/Buttons/Button'



import useFAQItems from '../hooks/useFAQItems'
import FAQColumn from '../components/FAQSection/FAQColumn'
import Peragrapg from '../components/Heading/Peragrapg'
import LocationTabs from '../components/Buttons/LocationTabs'
import useTabActive from '../hooks/useTabHandler'
import usePagination from '../hooks/usePagination'
import FeatureItem from '../components/Global/FeatureItem'
import Advantages from '../components/Global/Advantages'
import AdvantagesWrapper from '../components/Wrappers/AdvantagesWrapper'
import PopularLinks from '../components/Global/PopularLinks'
import DotBtns from '../components/Global/DotBtns'
import HighlightCard from '../components/Global/HighlightCard'
import PageWrapper from '../components/Wrappers/PageWrapper'
import InfoBanner from '../components/Global/InfoBanner'

// px-[clamp(1rem,4.7vw,90px)]

function Flight() {
  const { isOpenHandler, data } = useFAQItems(flightFaqs)
  const { activeTab, isActiveHandler } = useTabActive("cities")
  const { page, currentItems, pageVisit, setPage, totalPage, gridCols } = usePagination(popularFlightDestinations[activeTab], 9)

  useEffect(() => {
    setPage(0);
  }, [activeTab]);


  return (
    <div className=''>
      <BookingSearch img={img} title="The best flight offers from anywhere, to everywhere" variants="flight" />
      <PageWrapper>


        <HighlightCard items={flightFeatures} variants="flight" />
        <PangelHeading title="Flight deals from India" variants="flightHeading" />

        <p className='mt-1'>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            flightDestinations.map((item) => (
              <FlightCard
                key={item.id}
                img={item.image}
                city={item.city}
                country={item.country}
                flights={item.flights}
                flightPric={item.priceFrom.toLocaleString("en-IN")}
              />
            ))
          }
        </div>
        <Buttons name="See more deals" variant="flight" />

        <InfoBanner variants="flightPage">
          <p>
            <span className='font-medium'>How did we find these deals? </span>
            We looked at every economy class flight from India leaving in the next three months. These fares have the biggest savings when compared to the average price.
            They were found in the last four days and prices are subject to change.
          </p>
        </InfoBanner>

        

        <PangelHeading title="Finding flight deals: frequently asked questions" variants="FAQFlight" />
        <FAQColumn variants="flightFAQ" data={data} isOpenHandler={isOpenHandler} />

        <AdvantagesWrapper>
          <>
            <PangelHeading title="Looking for the best flight deals to anywhere in the world?" variants="flightBenifits" />
            <Peragrapg variants="flightPera" pera="It’s easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here’s how." />
          </>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center mt-9 gap-8 px-7 md:px-6'>
            {
              flightAdvantages.map((item) => (
                <Advantages
                  key={item.id}
                  {...item}
                />
              ))
            }
          </div>
        </AdvantagesWrapper>

        <PangelHeading title="Plan your journey with peace of mind" variants="flightJourney" />
        <Peragrapg pera="We've made it our mission to help you travel with confidence and make your journey as smooth as possible." variants="flightJourney" />


        <div className='grid md:grid-cols-2 mt-16 gap-[4rem]'>
          {
            flightKeyPoints.map((item) => (
              <FeatureItem
                icon={item.icon}
                key={item.id}
                title={item.title}
                description={item.description}
                variant="flightFeatureItem"
              />
            ))
          }
        </div>

        <PangelHeading title="More travel options" variants='moreOption' />
        <LocationTabs items={flightLocationTabs} isActiveHandler={isActiveHandler} activeTab={activeTab} />
        <PopularLinks items={currentItems} gridCols={gridCols} />
        <DotBtns pages={totalPage} index={page} slideBtn={pageVisit} />


      </PageWrapper>

    </div>
  )
}

export default Flight


{/* <div className='border px-2 py-1 mt-8 rounded-md flex items-center gap-2 border-gray-400'>
          <MdError className='text-3xl rotate-180 text-gray-500' />
          <p>
            <span className='font-medium'>How did we find these deals? </span>
            We looked at every economy class flight from India leaving in the next three months. These fares have the biggest savings when compared to the average price.
            They were found in the last four days and prices are subject to change.
          </p>
        </div> */}