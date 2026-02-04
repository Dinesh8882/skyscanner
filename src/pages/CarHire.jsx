import React, { useContext, useEffect } from 'react'
import BookingSearch from '../components/Flight/BookingSearch'
import img from '../assets/hotel.webp'
import PageWrapper from '../components/Wrappers/PageWrapper'
import HighlightCard from '../components/Global/HighlightCard'
import { articles, carHireCards, carHireFaqs, carHireInfoCards, carHireLinks, carHireTabs, carList, carRentalBrands, carRentalInfo, carTypeTabs, navigationTabs, rentalHighlights } from '../config/car.config'
import CarNavbar from '../components/CarPageComponent/CarNavbar'
import PangelHeading from '../components/Heading/PangelHeading'
import useSlider from '../hooks/useSlider'
import CardAnimation from '../components/Global/CardAnimation'

import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import InfoBanner from '../components/Global/InfoBanner'
import Peragrapg from '../components/Heading/Peragrapg'
import useTabActive from '../hooks/useTabHandler'
import LocationTabs from '../components/Buttons/LocationTabs'
import CarCard from '../components/CarPageComponent/CarCard'
import Brands from '../components/Hotel/Brands'
import Facts from '../components/Hotel/Facts'
import FeatureItem from '../components/Global/FeatureItem'
import useFAQItems from '../hooks/useFAQItems'
import FAQColumn from '../components/FAQSection/FAQColumn'
import { NavLink } from 'react-router-dom'
import { FlightContext } from '../context/FlightsContext'
import SmartExplore from '../components/Global/SmartExplore'
import PopularLinks from '../components/Global/PopularLinks'
import DotBtns from '../components/Global/DotBtns'
import usePagination from '../hooks/usePagination'


function CarHire() {
  const {
    index,
    totalPage,
    sliderBtnHandler,
    itemPerPage,
    cardWidthRef,
    cardGap,
    cardWidth,
    nextSliderBtn,
    prevSliderBtn
  } = useSlider({ itemPerPage: 3, items: carHireCards, deps: [carHireCards] })
  const { activeTab, isActiveHandler } = useTabActive("all")

  const { isOpenHandler, data } = useFAQItems(carHireFaqs)
  const { switchTab } = useContext(FlightContext)
  const { activeTab: locationTabs, isActiveHandler: locationTabsHandle } = useTabActive("one_way")
  const { page, currentItems, pageVisit, setPage, totalPage: carHirePages, gridCols } = usePagination(carHireLinks[locationTabs], 9)

  useEffect(() => {
    setPage(0)
  }, [locationTabs])


  return (
    <div className=''>
      <BookingSearch img={img} title="The best flight offers from anywhere, to everywhere" />
      <PageWrapper>
        <HighlightCard items={carHireInfoCards} variants="carPage" />
        <CarNavbar />
        <div className='flex justify-between items-center mt-12 sm:mt-24'>
          <PangelHeading title="Popular car rental destinations" variants='popularCarRent' />
          <div className='md:gap-2 hidden md:flex'>
            <button disabled={index === 0 && true} onClick={prevSliderBtn} className={`p-2.5 bg-[#e0e4e9] rounded-md ${index === 0 ? "cursor-not-allowed" : "cursor-pointer"} `}>
              <IoIosArrowBack className={`${index === 0 && "text-gray-400"}`} />
            </button>
            <button onClick={nextSliderBtn} className={`p-2.5 bg-[#e0e4e9] rounded-md ${index === totalPage - 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>
              <IoIosArrowForward className={`${index === totalPage - 1 && "text-gray-400"}`} />
            </button>
          </div>
        </div>
        <CardAnimation
          index={index}
          width={cardWidth}
          itemPerPage={itemPerPage}
          items={carHireCards}
          useRefGap={cardGap}
          useRefWidth={cardWidthRef}
        />

        <div className='hidden md:flex'>
          <InfoBanner variants="carPage">
            <p className='text-sm  '>
              These are estimated prices to help you choose from a large number of options.
              Each is an average based on the lowest  <span className='font-medium'>car rental</span> prices found for each destination over the last 15 days.
            </p>
          </InfoBanner>
        </div>

        <PangelHeading title="Find a cheap car hire deal near you" variants='carPage' />
         <Peragrapg pera="We found some great car hire deals in New Delhi. You can check them out below, or start a new search to get prices for your exact dates." variants="carPage" />
         <LocationTabs items={carTypeTabs} isActiveHandler={isActiveHandler} activeTab={activeTab} />

        <CarCard items={carList} />
        <div className="flex justify-center">
          <button
            className="
                      text-blue-700
                      font-bold
                      mt-4
                      cursor-pointer
                      flex
                      items-center
                      gap-2
                      relative under-line-animation w-fit"
          >
            View all deals
            <FaArrowRight />
          </button>
        </div>

        <div className='mt-7'>
          <InfoBanner variants="carPage">
            <p className='text-sm '>
              <span className='font-medium'>How did we find these car hire prices? </span>
              We looked at car hire rates over the next 30 days. The ones you see here are the cheapest we found for the most popular kinds of vehicle.
            </p>
          </InfoBanner>
        </div>
        <PangelHeading title="Your trusted car hire companies, all in one place" variants='carPage' />

        <Brands items={carRentalBrands} />
        <PangelHeading title="Car hire fast facts" variants='carPage' />
        <Peragrapg pera="Everything you need to know to hit the road happy." />
        <div className='flex flex-wrap gap-7  mt-5'>
          {
            rentalHighlights.map((item) => (
                <Facts key={item.id} {...item} variants="carPage" />
              ))
          }
        </div>
        <PangelHeading title="How to find the best car hire deal" variants='carPage' />
        <Peragrapg pera="
        We’re frequently named as the most trusted travel search site out there. 
        We're free to use, and we’ll do the hard work for you by searching hundreds of car hire companies, 
        allowing you to instantly compare prices and then book. 
        Here's how to get the most out of your car rental search."
          variants="carPage"
        />

        <div className='grid md:grid-cols-2 mt-16 gap-[1rem]'>
          {
            carRentalInfo.map((item) => (
              <FeatureItem
                icon={item.icon}
                key={item.id}
                title={item.title}
                description={item.description}
                variant="carPage"
              />
            ))
          }
        </div>

        <PangelHeading title="Finding your ride with us: FAQs" variants='carPage' />
        <FAQColumn variants="flightFAQ" data={data} isOpenHandler={isOpenHandler} />
        <PangelHeading variants='carPage' title="Ready to plan a trip?"/>

        <div className='max-w-3xl flex  flex-col mt-4'>
          {
            navigationTabs.map(({ label, path, icon: Icon, id }) => (
              <NavLink className="flex py-4 justify-between items-center border-b border-gray-300" to={path} onClick={() => switchTab(label)}>

                <div className='flex items-center gap-2'>
                  <Icon className='text-[25px]'/>
                  <h3 className='text-[20px] font-medium'>
                    {label}
                  </h3>
                </div>
                <div className='text-xl'>
                  <IoIosArrowForward />
                </div>
              </NavLink>
            ))
          }
        </div>
        <SmartExplore data={articles} variant="carPage" />
        <PangelHeading title="Start planning your road trip" variants='carPageTab' />
        <LocationTabs items={carHireTabs} isActiveHandler={locationTabsHandle} activeTab={locationTabs} />
        <PopularLinks items={currentItems} gridCols={gridCols} />
        <DotBtns pages={carHirePages} index={page} slideBtn={pageVisit} />

      </PageWrapper>

    </div>
  )
}

export default CarHire
