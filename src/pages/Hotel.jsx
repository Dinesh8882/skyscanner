import React, { useEffect, useState } from 'react'
import BookingSearch from '../components/Flight/BookingSearch'
import img from '../assets/hotel.webp'
import {
  categoriesTabs,
  destinationCards,
  features,
  hotelCards,
  hotelFAQs,
  hotelFeatures,
  hotelLinks,
  hotelStats,
  inspirationArticles,
  topLocations,
  travelPartners
} from '../config/hotel.config'
import PangelHeading from '../components/Heading/PangelHeading'
import Brands from '../components/Hotel/Brands'
import Peragrapg from '../components/Heading/Peragrapg'
import useTabActive from '../hooks/useTabHandler'
import LocationTabs from '../components/Buttons/LocationTabs'
import HotelCard from '../components/Hotel/HotelCard'

import { motion } from 'framer-motion'
import useSlider from '../hooks/useSlider'
import DotBtns from '../components/Global/DotBtns'
import Facts from '../components/Hotel/Facts'
import AdvantagesWrapper from '../components/Wrappers/AdvantagesWrapper'
import Advantages from '../components/Global/Advantages'
import useFAQItems from '../hooks/useFAQItems'
import FAQColumn from '../components/FAQSection/FAQColumn'
import InspirationCard from '../components/Hotel/InspirationCard'
import usePagination from '../hooks/usePagination'
import PopularLinks from '../components/Global/PopularLinks'
import PageWrapper from '../components/Wrappers/PageWrapper'
import CardAnimation from '../components/Global/CardAnimation'
import FeatureItem from '../components/Global/FeatureItem'
import SmartExplore from '../components/Global/SmartExplore'

function Hotel() {
  const { activeTab, isActiveHandler } = useTabActive("hyderabad")
  const [itemPerPage, setItemPerPage] = useState(3)
  const {
    index: hotelIndex,
    totalPage: hotelPages,
    sliderBtnHandler: hotelSlideBtn,
    itemPerPage: hotelPerPage,
    cardWidthRef: hotelRef,
    cardGap: hotelGap,
    cardWidth: hotelWidth
  } = useSlider({ itemPerPage, items: hotelCards[activeTab], deps: activeTab })

  const {
    index: destIndex,
    totalPage: destPages,
    sliderBtnHandler: destSlide,
    itemPerPage: destPerPage,
    cardWidthRef: destRef,
    cardGap: destGap,
    cardWidth: destWidth
  } = useSlider({ itemPerPage, items: destinationCards, deps: [destinationCards] });

  const { isOpenHandler, data } = useFAQItems(hotelFAQs)
  const { activeTab: locationTabs, isActiveHandler: locationTabsHandle } = useTabActive("cities")
  const { page, currentItems, pageVisit, setPage, totalPage, gridCols } = usePagination(hotelLinks[locationTabs], 9)


  useEffect(() => {
    setPage(0)
  }, [locationTabs])

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth
      hotelSlideBtn(0)
      destSlide(0)
      if (width >= 1024) {
        setItemPerPage(3); 
      } else if (width >= 768) {
        setItemPerPage(2); 
      } else {
        setItemPerPage(1); 
      }
    }

    updateItems()
    window.addEventListener("resize", updateItems)

    return ()=> window.removeEventListener("resize",updateItems)
  }, [])


  return (
    <div>
      {/* <BookingSearch title="Find the right hotel today" img={img} variants="hotel" /> */}
      <PageWrapper>
        {/* <div className='grid sm:grid-cols-3  mt-16 md:gap-16 gap-8 '>
          {
            hotelFeatures.map((item) => (
              <FeatureItem
                title=""
                description={item.description}
                key={item.id}
                icon={item.icon}
                variant="hotelFeatureItem"
              />
            ))
          }
        </div> */}

        {/* <PangelHeading title="Compare hotels across your favourite brands" variants='hotel' /> */}

        {/* <Brands items={travelPartners} /> */}
        {/* <PangelHeading title="Hotels in your home country" variants='hotel' /> */}
        {/* <Peragrapg pera="Your next adventure may be closer than you think. Discover hotels just beyond your doorstep." variants="hotelPera" /> */}
        {/* <LocationTabs items={topLocations} isActiveHandler={isActiveHandler} activeTab={activeTab} /> */}

        <div className='mt-7 overflow-hidden  w-full pb-6'>
          <motion.div
            ref={hotelGap}
            initial={{ x: 0 }}
            animate={{ x: -(hotelIndex * hotelWidth * hotelPerPage) }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex overflow-x-auto  no-scrollbar sm:overflow-x-visible  gap-4"
          >
            {hotelCards[activeTab].map((item, ind) => (
              <HotelCard
                key={item.id}
                {...item}
                ref={ind === 0 ? hotelRef : null}
              />
            ))}
          </motion.div>
        </div>

        <DotBtns pages={hotelPages} slideBtn={hotelSlideBtn} index={hotelIndex} variant="hotelDots" />

        <PangelHeading title="Hotels for fab city breaks" variants='hotel' />
        <Peragrapg
          pera="The key to a great city break? A perfectly-placed base. Check out the best city centre hotels."
          variants="hotelPera"
        />
        <CardAnimation
          index={destIndex}
          width={destWidth}
          itemPerPage={destPerPage}
          items={destinationCards}
          useRefGap={destGap}
          useRefWidth={destRef}
        />
        <DotBtns pages={destPages} slideBtn={destSlide} index={destIndex} />

        <PangelHeading title="Fast facts" variants='hotel' />
        <Peragrapg pera="Sleep easy, armed with the stuff that's good to know before you go." />
        <div className='flex flex-wrap gap-7  mt-5'>
          {
            hotelStats.map((item) => (
              <Facts key={item.id} {...item} />
            ))
          }
        </div>

        <AdvantagesWrapper>
          <div className='grid md:grid-cols-3 justify-items-center md:mt-9 gap-8  px-9'>
            {
              features.map((item) => (
                <Advantages
                  key={item.id}
                  {...item}
                />
              ))
            }
          </div>
        </AdvantagesWrapper>
        <PangelHeading title="FAQs" variants='hotel' />
        <FAQColumn variants="flightFAQ" data={data} isOpenHandler={isOpenHandler} />
        <SmartExplore data={inspirationArticles} variant="hotel" />

        <PangelHeading title="More travel options" variants='hotelLocation' />
        <LocationTabs items={categoriesTabs} isActiveHandler={locationTabsHandle} activeTab={locationTabs} />
        <PopularLinks items={currentItems} gridCols={gridCols} />
        <DotBtns pages={totalPage} index={page} slideBtn={pageVisit} />


      </PageWrapper>


    </div>
  )
}

export default Hotel
