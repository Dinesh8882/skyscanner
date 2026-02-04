import React, { useEffect } from 'react'
import SearchPanel from '../components/SearchPanel/SearchPanel'

import PangelHeading from '../components/Heading/PangelHeading';
import LocationTabs from '../components/Buttons/LocationTabs';
import { carHireLocations, locationTabs } from '../config/button.config'
import useTabActive from '../hooks/useTabHandler';
import ServiceTabs from '../components/PrimaryActions/ServiceTabs';
import FAQAccordion from '../components/FAQSection/FAQAccordion';
import usePagination from '../hooks/usePagination';
import PopularLinks from '../components/Global/PopularLinks';
import DotBtns from '../components/Global/DotBtns';
import PageWrapper from '../components/Wrappers/PageWrapper';

function Home() {
    const { activeTab, isActiveHandler } = useTabActive("country");
    const { page, currentItems, pageVisit, setPage, totalPage, gridCols } = usePagination(carHireLocations[activeTab], 9)


    useEffect(() => {
        setPage(0);
    }, [activeTab]);

    return (
        <>
            <SearchPanel variants="home" />
            <PageWrapper>
                <ServiceTabs />
                <PangelHeading title="Booking flights with Skyscanner" variants="FAQ" />
                <FAQAccordion />
                <PangelHeading title="Start planning your adventure" variants="country" />
                <LocationTabs items={locationTabs} isActiveHandler={isActiveHandler} activeTab={activeTab} />
                <PopularLinks items={currentItems} gridCols={gridCols} />
                <DotBtns pages={totalPage} index={page} slideBtn={pageVisit} />
            </PageWrapper>
        </>
    )
}

export default Home
