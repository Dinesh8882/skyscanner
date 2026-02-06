import React, { lazy, Suspense, useEffect } from 'react'
import SearchPanel from '../components/SearchPanel/SearchPanel'

import PangelHeading from '../components/Heading/PangelHeading';
import LocationTabs from '../components/Buttons/LocationTabs';
import { carHireLocations, locationTabs } from '../config/button.config'
import useTabActive from '../hooks/useTabHandler';
import ServiceTabs from '../components/PrimaryActions/ServiceTabs';
import usePagination from '../hooks/usePagination';
import PageWrapper from '../components/Wrappers/PageWrapper';

const FAQAccordion = lazy(() => import('../components/FAQSection/FAQAccordion'))
const PopularLinks = lazy(() => import('../components/Global/PopularLinks'))
const DotBtns = lazy(() => import('../components/Global/DotBtns'));

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
                <h1>Dinesh</h1>
                <PangelHeading title="Booking flights with Skyscanner" variants="FAQ" />

                <Suspense fallback={<div>FAQ Loading....</div>}>
                    <FAQAccordion />
                </Suspense>

                <PangelHeading title="Start planning your adventure" variants="country" />
                <LocationTabs items={locationTabs} isActiveHandler={isActiveHandler} activeTab={activeTab} />


                <Suspense fallback={<div>Loading destinations...</div>}>
                    <PopularLinks items={currentItems} gridCols={gridCols} />
                    <DotBtns pages={totalPage} index={page} slideBtn={pageVisit} />
                </Suspense>
            </PageWrapper>
        </>
    )
}

export default Home
