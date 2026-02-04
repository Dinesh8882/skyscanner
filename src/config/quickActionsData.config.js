import { FaHotel } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
export const quickActionsData = [
    {
        id: 1,
        label: "Hotels",
        icon: FaHotel, // or component reference
        route: "/hotels",
    },
    {
        id: 2,
        label: "Car",
        icon: IoCarSportSharp,
        route: "/car-hire",
    },
    {
        id: 3,
        label: "Explore everywhere",
        icon: FaGlobeAsia,
        route: "/explore",
    },
];