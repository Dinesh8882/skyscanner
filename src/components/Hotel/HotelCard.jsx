import React, { forwardRef } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

const HotelCard = forwardRef(function HotelCard({
  image,
  name,
  distanceFromCenter,
  rating,
  ratingValue,
  reviews,
  pricePerNight,
  currency,
}, ref) {
  return (
    <CardWrapper >
      <div className="h-30 w-full  overflow-hidden rounded-t-xl" ref={ref}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 ">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-xl truncate w-69.25 leading-tight">
            {name}
          </h3>
          <span className="text-orange-500 text-xl">
            {rating}
          </span>
        </div>
        <p className="text-md text-gray-500">
          {distanceFromCenter}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <p className=" text-xs  rounded">
            <span className="font-bold text-[15px]">{ratingValue}</span>/5
          </p>
          <span className="text-md font-medium">
            {ratingValue >= 4 ? "Good" : "Average"}
          </span>
          <span className="text-xs text-gray-500">
            {reviews} reviews
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 flex justify-end border-t pt-3 border-gray-300">
        <div className="text-right">
          <p className="font-bold text-lg">
            {currency}{pricePerNight}
          </p>
          <p className="text-xs text-gray-500">
            Per night
          </p>
        </div>
      </div>

    </CardWrapper>
  );
})

export default HotelCard;
