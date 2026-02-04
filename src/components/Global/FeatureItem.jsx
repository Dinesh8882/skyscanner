import React from 'react'
import PangelHeading from '../Heading/PangelHeading'
import Peragrapg from '../Heading/Peragrapg'

const featureVariant = {
    flightFeatureItem: " md:gap-4 items-start",
    hotelFeatureItem: "gap-2",
    carPage:"gap-3"
}

const iconSizeVariant = {
  flightFeatureItem: "text-[20px] pt-0.5 sm:pt-1",
  hotelFeatureItem: "text-xl",
  carPage: "text-[20px] text-[25px] pt-0.5 sm:pt-1",
};

function FeatureItem({ title, description, icon: Icon, variant }) {
    return (
        <div className={`${featureVariant[variant]} flex `}>
            <div className={iconSizeVariant[variant]} >
                <Icon />

            </div>
            <div className={`${variant === "flightFeatureItem" && "px-4 md:px-0"}`}>
                {
                    variant !== "hotelFeatureItem"  && (
                        <h1 className='text-[16px] md:text-[20px] font-medium'>{title}</h1>
                    )
                }
                {
                    variant === "hotelFeatureItem" && <PangelHeading title={title} variants={variant} />
                }
                <Peragrapg pera={description} variants={variant} />
            </div>
        </div>
    )
}

export default FeatureItem
