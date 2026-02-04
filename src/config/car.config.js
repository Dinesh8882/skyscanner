import { FiDollarSign, FiClock, FiMapPin } from "react-icons/fi";

import carCard1 from '../assets/carCard1.webp'
import carCard2 from '../assets/carCard2.webp'
import carCard3 from '../assets/carCard3.webp'
import carCard4 from '../assets/carCard4.svg'
import carCard5 from '../assets/carCard5.webp'
import carCard6 from '../assets/carCard6.webp'
import carCard7 from '../assets/carCard7.svg'
import carCard8 from '../assets/carCard8.webp'
import carCard9 from '../assets/carCard9.svg'

import carImg1 from '../assets/carImg1.png'
import carImg2 from '../assets/carImg2.png'
import carImg3 from '../assets/carImg3.png'
import carImg4 from '../assets/carImg4.png'
import carImg5 from '../assets/carImg5.png'


import { IoIosPerson } from "react-icons/io";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaTag, FaCar, FaHeart } from "react-icons/fa";
import {
  MdCarRental,
  MdCancel,
  MdCalendarMonth,
  MdElectricCar,
  MdLocationOn,
  MdLocalGasStation,
} from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { BiSolidPlaneAlt } from "react-icons/bi";



import carBrand1 from '../assets/carBrand1.png'
import carBrand2 from '../assets/carBrand2.png'
import carBrand3 from '../assets/carBrand3.png'
import carBrand4 from '../assets/carBrand4.png'
import carBrand5 from '../assets/carBrand5.png'
import carBrand6 from '../assets/carBrand6.png'


import carHire1 from '../assets/carHire1.jpg'
import carHire2 from '../assets/carHire2.jpg'
import carHire3 from '../assets/carHire3.jpg'
import carHire4 from '../assets/carHire4.jpg'


const carHireInfoCards = [
  {
    id: 1,
    description: "Save big on car hire when you compare with Skyscanner",
    title: "Find a cheap car hire deal",
    icon: FiDollarSign,
  },
  {
    id: 2,
    description: "82% of our car hire deals have unlimited mileage",
    title: "Book with confidence",
    icon: FiClock,
  },
  {
    id: 3,
    description: "Find car hire near you in 46,139 cities worldwide",
    title: "Choose your pick-up spot",
    icon: FiMapPin,
  }
];

const carHireCards = [
  {
    id: 1,
    city: "London",
    country: "United Kingdom",
    price: 1243,
    popularCarType: "Economy",
    image: carCard1,
  },
  {
    id: 2,
    city: "Dubai",
    country: "United Arab Emirates",
    price: 1462,
    popularCarType: "Intermediate",
    image: carCard2,
  },
  {
    id: 3,
    city: "Mumbai",
    country: "India",
    price: 1779,
    popularCarType: "Economy",
    image: carCard3,
  },
  {
    id: 4,
    city: "Pune",
    country: "India",
    price: 1779,
    popularCarType: "Fullsize",
    image: carCard4,
  },
  {
    id: 5,
    city: "Bengaluru",
    country: "India",
    price: 1976,
    popularCarType: "Economy",
    image: carCard5,
  },
  {
    id: 6,
    city: "Bangkok",
    country: "Thailand",
    price: 2059,
    popularCarType: "Economy",
    image: carCard6,
  },
  {
    id: 7,
    city: "Pune",
    country: "India",
    price: 1779,
    popularCarType: "Fullsize",
    image: carCard7,
  },
  {
    id: 8,
    city: "Bengaluru",
    country: "India",
    price: 1976,
    popularCarType: "Economy",
    image: carCard8,
  },
  {
    id: 9,
    city: "Bangkok",
    country: "Thailand",
    price: 2059,
    popularCarType: "Economy",
    image: carCard9,
  }
];

const carTypeTabs = [
  {
    id: 1,
    label: "Show all",
    value: "all",
  },
  {
    id: 2,
    label: "Small cars",
    value: "small",
  },
  {
    id: 3,
    label: "Medium cars",
    value: "medium",
  },
  {
    id: 4,
    label: "Large cars",
    value: "large",
  },
  {
    id: 5,
    label: "Luxury cars",
    value: "luxury",
  },
  {
    id: 6,
    label: "People carriers",
    value: "people_carriers",
  },
]

const carList = [
  {
    id: 1,
    name: "Renault Clio",
    type: "or similar 4–5 doors",
    pricePerDay: 1790,
    currency: "₹",
    passengers: 4,
    bags: 2,
    provider: "Europcar",
    badge: null,
    image: carImg1,
    bag: BsFillSuitcase2Fill,
    person: IoIosPerson
  },
  {
    id: 2,
    name: "Toyota Corolla",
    type: "or similar 4–5 doors",
    pricePerDay: 3048,
    currency: "₹",
    passengers: 4,
    bags: 3,
    provider: null,
    badge: "exclusive",
    image: carImg2,
    bag: BsFillSuitcase2Fill,
    person: IoIosPerson
  },
  {
    id: 3,
    name: "GMC Savana 1500",
    type: "or similar passenger van",
    pricePerDay: 6341,
    currency: "₹",
    passengers: 5,
    bags: 4,
    provider: "AVIS",
    badge: null,
    image: carImg3,
    bag: BsFillSuitcase2Fill,
    person: IoIosPerson
  },
  {
    id: 4,
    name: "Honda e",
    type: "or similar 4–5 doors",
    pricePerDay: 5986,
    currency: "₹",
    passengers: 4,
    bags: 2,
    provider: "AVIS",
    badge: null,
    image: carImg4,
    bag: BsFillSuitcase2Fill,
    person: IoIosPerson
  },
  {
    id: 5,
    name: "Kia Carnival",
    type: "or similar passenger van",
    pricePerDay: 3031,
    currency: "₹",
    passengers: 7,
    bags: 4,
    provider: null,
    badge: "exclusive",
    image: carImg5,
    bag: BsFillSuitcase2Fill,
    person: IoIosPerson
  }
];

const carRentalBrands = [
  {
    id: 1,
    label: "Europcar",
    slug: "europcar",
    image: carBrand1,
  },
  {
    id: 2,
    label: "AVIS",
    slug: "avis",
    image: carBrand2,
  },
  {
    id: 3,
    label: "Payless",
    slug: "payless",
    image: carBrand3,
  },
  {
    id: 4,
    label: "Green Motion",
    slug: "green-motion",
    image: carBrand4,
  },
  {
    id: 5,
    label: "Firefly",
    slug: "firefly",
    image: carBrand5,
  },
  {
    id: 6,
    label: "Hertz",
    slug: "hertz",
    image: carBrand6,
  },
];

const rentalHighlights = [
  {
    id: 1,
    icon: FaTag,
    title: "Best deal found",
    value: "₹ 3,019",
  },
  {
    id: 2,
    icon: FaCar,
    title: "Cheapest provider",
    value: "S.S.TRAVELS",
  },
  {
    id: 3,
    icon: FaHeart,
    title: "Highest rated provider",
    value: "EPTA",
  },
];

const carRentalInfo = [
  {
    id: 1,
    icon: MdCancel,
    title: "Book now, cancel later",
    description:
      "There are many car and van hire options with flexible booking policies and free cancellation, so you can bag the best deal with total flexibility to change your plans last-minute if you need to.",
  },
  {
    id: 2,
    icon: MdCalendarMonth,
    title: "Rent a car in New Delhi for a whole month",
    description:
      "Want to rent a car for almost a month? Often, car rental companies avoid costly admin in between pick-ups by hiring out cars for longer periods, so selecting 30 days can be cheaper than renting for just three weeks.",
  },
  {
    id: 3,
    icon: MdLocalGasStation,
    title: "Compare fuel policies",
    description:
      "To save money on topping up the tank before you take off, look out for deals with a full-to-full fuel tank policy.",
  },
  {
    id: 4,
    icon: MdCarRental,
    title: "Skip the queues",
    description:
      "We call out keyless or self-service pick-up when you search with us. No keys or paperwork to fill in means no queues — just turn up at your preferred car hire location and hit the road.",
  },
  {
    id: 5,
    icon: MdElectricCar,
    title: "Go greener",
    description:
      "Limit your impact on the planet while you explore it. Filter by electric vehicles, which will be charged up and ready to go when you pick them up — no worries about fuel policies.",
  },
  {
    id: 6,
    icon: MdLocationOn,
    title: "Look further afield",
    description:
      "If you're on a budget, it's often cheaper to hop on public transport to a car rental pick-up location a little further away.",
  },
];

const carHireFaqs = [
  {
    id: 1,
    question: "How does Skyscanner's car hire comparison tool work?",
    answer:
      "Skyscanner compares car hire deals from multiple providers in one place. You enter your pick-up details and dates, and we show you available options so you can easily compare prices, car types, fuel policies, and provider ratings before booking.",
  },
  {
    id: 2,
    question: "Are there any extra fees added to the price advertised?",
    answer:
      "The price you see usually includes mandatory fees, but some extras like additional drivers, child seats, or young driver fees may cost extra. Always check the rental terms before booking to understand what’s included.",
  },
  {
    id: 3,
    question: "Can I return my hire car to a different location?",
    answer:
      "Yes, many car hire providers allow one-way rentals where you can pick up the car in one location and return it to another. This may involve an additional fee depending on the provider and location.",
  },
  {
    id: 4,
    question: "Where in the world can I find car hire with Skyscanner?",
    answer:
      "Skyscanner offers car hire options in thousands of locations worldwide, including airports, city centres, and popular travel destinations across more than 100 countries.",
  },
  {
    id: 5,
    question: "Do I need a credit card in order to rent a car?",
    answer:
      "In most cases, yes. Many car hire companies require a credit card in the driver’s name for the security deposit. Some providers may accept debit cards, but availability varies by location.",
  },
  {
    id: 6,
    question: "Can I hire a van?",
    answer:
      "Yes, you can hire vans through Skyscanner. Options range from small cargo vans to larger passenger vans, depending on availability at your chosen location.",
  },
  {
    id: 7,
    question: "What kinds of vehicles can I hire?",
    answer:
      "You can choose from a wide range of vehicles, including economy cars, sedans, SUVs, luxury cars, vans, and electric vehicles, depending on what’s available where you’re renting.",
  },
  {
    id: 8,
    question: "What are the cheapest suppliers in New Delhi?",
    answer:
      "Prices change frequently, but Skyscanner compares multiple car hire suppliers in New Delhi so you can easily find the cheapest options available for your dates.",
  },
  {
    id: 9,
    question: "If I’m going on holiday, should I hire at the airport or not?",
    answer:
      "Airport car hire is convenient, but it can sometimes be more expensive. Hiring from a city location slightly further away may be cheaper, especially if public transport is available.",
  },
  {
    id: 10,
    question: "Can I rent a car for just one day?",
    answer:
      "Yes, many car hire providers offer rentals for as little as one day. Prices and availability depend on the location and type of vehicle you choose.",
  },
  {
    id: 11,
    question: "Can I hire a car for a month?",
    answer:
      "Yes, long-term car hire is available and can often be cheaper than short-term rentals. Selecting a 30-day rental may help you get better value.",
  },
  {
    id: 12,
    question: "What is the maximum amount of passengers a vehicle can carry?",
    answer:
      "Passenger capacity depends on the vehicle type. Standard cars usually seat 4–5 people, while larger SUVs and vans can carry more passengers.",
  },
  {
    id: 13,
    question: "Can I find electric car hire in New Delhi?",
    answer:
      "Electric car hire availability is growing in New Delhi. You can filter your search to show electric vehicles if they’re available for your selected dates.",
  },
  {
    id: 14,
    question: "What is the best type of car to hire around New Delhi?",
    answer:
      "For city travel, a compact or economy car is usually best due to traffic and parking. For longer trips or family travel, an SUV or sedan may offer more comfort.",
  },
];

const navigationTabs = [
  {
    id: 1,
    label: "Hotels",
    path: "/hotels",
    icon: RiHotelFill
  },
  {
    id: 2,
    label: "Flights",
    path: "/flights",
    icon: BiSolidPlaneAlt
  }
];

const articles = [
  {
    id: 1,
    title: "Driving in Europe: everything you need to know",
    publishedAt: "25 July 2024",
    source: "Skyscanner",
    coverImage: carHire1,
    slug: "driving-in-europe-everything-you-need-to-know",
  },
  {
    id: 2,
    title: "Your complete guide to car hire excess insurance",
    publishedAt: "25 July 2024",
    source: "Skyscanner",
    coverImage: carHire2,
    slug: "complete-guide-to-car-hire-excess-insurance",
  },
  {
    id: 3,
    title: "The five best UK road trips",
    publishedAt: "29 July 2024",
    source: "Skyscanner",
    coverImage: carHire3,
    slug: "five-best-uk-road-trips",
  },
  {
    id: 4,
    title: "Car seat rules in India and around the world",
    publishedAt: "10 March 2025",
    source: "Skyscanner",
    coverImage: carHire4,
    slug: "car-seat-rules-in-india-and-around-the-world",
  },
];

const carHireTabs = [
  {
    id: 1,
    label: "One-way car hire",
    value: "one_way",
  },
  {
    id: 2,
    label: "Car hire in popular destinations",
    value: "popular_destinations",
  },
  {
    id: 3,
    label: "Explore car types",
    value: "car_types",
  },
  {
    id: 4,
    label: "Popular car hire providers",
    value: "providers",
  },
  {
    id: 5,
    label: "Airport car rental",
    value: "airport_rental",
  },
];

const carHireLinks = {
  one_way: [
    { id: 1, label: "One-way car hire", city: "One-way car hire", slug: "one-way-car-hire" }
  ],
  popular_destinations: [
    { id: 1, label: "Cheap car hire in Japan", city: "Japan", slug: "japan" },
    { id: 2, label: "New Delhi car hire", city: "New Delhi", slug: "new-delhi" },
    { id: 3, label: "Car hire in Singapore", city: "Singapore", slug: "singapore" },

    { id: 4, label: "Best car hire in Sri Lanka", city: "Sri Lanka", slug: "sri-lanka" },
    { id: 5, label: "Best car hire in Dubai", city: "Dubai", slug: "dubai" },
    { id: 6, label: "United States car hire", city: "United States", slug: "united-states" },

    { id: 7, label: "Car hire in China", city: "China", slug: "china" },
    { id: 8, label: "Saudi Arabia car hire", city: "Saudi Arabia", slug: "saudi-arabia" },
    { id: 9, label: "Malaysia car hire", city: "Malaysia", slug: "malaysia" },

    { id: 10, label: "Car hire in New York", city: "New York", slug: "new-york" },
    { id: 11, label: "Cheap car hire in Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 12, label: "Cheap car hire in Muscat", city: "Muscat", slug: "muscat" },

    { id: 13, label: "Cheap car hire in Tokyo", city: "Tokyo", slug: "tokyo" },
    { id: 14, label: "Cheap car hire in Colombo", city: "Colombo", slug: "colombo" },
    { id: 15, label: "Cheap car hire in Ho Chi Minh City", city: "Ho Chi Minh City", slug: "ho-chi-minh-city" },

    { id: 16, label: "Cheap car hire in Sandakan", city: "Sandakan", slug: "sandakan" },
    { id: 17, label: "Cheap car hire in Singapore", city: "Singapore", slug: "singapore" },
    { id: 18, label: "Car hire in Phuket", city: "Phuket", slug: "phuket" },
  ],
  car_types: [
    { id: 1, label: "Economy car hire", city: null, slug: "economy-car-hire" },
    { id: 2, label: "Premium car hire", city: null, slug: "premium-car-hire" },
    { id: 3, label: "Estate car hire", city: null, slug: "estate-car-hire" },
    { id: 4, label: "People Carrier hire", city: null, slug: "people-carrier-hire" },
    { id: 5, label: "SUV car hire", city: null, slug: "suv-car-hire" },
    { id: 6, label: "Convertible hire", city: null, slug: "convertible-hire" },
    { id: 7, label: "6 Seater car hire", city: null, slug: "6-seater-car-hire" },
    { id: 8, label: "Mini car hire", city: null, slug: "mini-car-hire" },
    { id: 9, label: "8 Seater hire", city: null, slug: "8-seater-hire" },
    { id: 10, label: "7 Seater hire", city: null, slug: "7-seater-hire" },
    { id: 11, label: "Compact hire", city: null, slug: "compact-hire" },
    { id: 12, label: "Small car hire", city: null, slug: "small-car-hire" },
    { id: 13, label: "Passenger Van car hire", city: null, slug: "passenger-van-car-hire" },
    { id: 14, label: "Family car hire", city: null, slug: "family-car-hire" },
    { id: 15, label: "9 Seater hire", city: null, slug: "9-seater-hire" },
    { id: 16, label: "Standard hire", city: null, slug: "standard-hire" },
    { id: 17, label: "Executive hire", city: null, slug: "executive-hire" },
    { id: 18, label: "Large hire", city: null, slug: "large-hire" },
  ],
  providers: [
    { id: 1, label: "Enterprise car hire", city: null, slug: "enterprise-car-hire" },
    { id: 2, label: "drivus car hire", city: null, slug: "drivus-car-hire" },
    { id: 3, label: "U-Save car hire", city: null, slug: "u-save-car-hire" },
    { id: 4, label: "Budget car hire", city: null, slug: "budget-car-hire" },
    { id: 5, label: "Exclusive car hire", city: null, slug: "exclusive-car-hire" },
    { id: 6, label: "AMEX car hire", city: null, slug: "amex-car-hire" },
    { id: 7, label: "Hertz car hire", city: null, slug: "hertz-car-hire" },
    { id: 8, label: "Alamo car hire", city: null, slug: "alamo-car-hire" },
    { id: 9, label: "Avis car hire", city: null, slug: "avis-car-hire" },
    { id: 10, label: "Green Motion car hire", city: null, slug: "green-motion-car-hire" },
    { id: 11, label: "Sixt car hire", city: null, slug: "sixt-car-hire" },
    { id: 12, label: "Europcar car hire", city: null, slug: "europcar-car-hire" },
    { id: 13, label: "Thrifty car hire", city: null, slug: "thrifty-car-hire" },
    { id: 14, label: "yesaway car rental car hire", city: null, slug: "yesaway-car-rental-car-hire" },
    { id: 15, label: "Dollar car hire", city: null, slug: "dollar-car-hire" }
  ],
  airport_rental: [
    { id: 1, label: "Best car hire at Bhubaneswar Airport", city: "Bhubaneswar", slug: "bhubaneswar-airport-car-hire" },
    { id: 2, label: "Best car hire at Bagdogra Airport", city: "Bagdogra", slug: "bagdogra-airport-car-hire" },
    { id: 3, label: "Bali (Denpasar) Airport car hire", city: "Bali", slug: "bali-denpasar-airport-car-hire" },
    { id: 4, label: "Port blair Airport car hire", city: "Port Blair", slug: "port-blair-airport-car-hire" },
    { id: 5, label: "Chennai Airport car hire", city: "Chennai", slug: "chennai-airport-car-hire" },
    { id: 6, label: "Cheap car hire at Delhi Indira Gandhi International Airport", city: "Delhi", slug: "delhi-igi-airport-car-hire" },
    { id: 7, label: "Hyderabad Airport car hire", city: "Hyderabad", slug: "hyderabad-airport-car-hire" },
    { id: 8, label: "Guwahati Airport car hire", city: "Guwahati", slug: "guwahati-airport-car-hire" },
    { id: 9, label: "Best car hire at Goa Dabolim Airport", city: "Goa", slug: "goa-dabolim-airport-car-hire" },
    { id: 10, label: "Best car hire at Zayed International Airport", city: "Abu Dhabi", slug: "zayed-international-airport-car-hire" },
    { id: 11, label: "Hanoi Airport car hire", city: "Hanoi", slug: "hanoi-airport-car-hire" },
    { id: 12, label: "Cheap car hire at Indore Airport", city: "Indore", slug: "indore-airport-car-hire" },
    { id: 13, label: "Best car hire at Lucknow Airport", city: "Lucknow", slug: "lucknow-airport-car-hire" },
    { id: 14, label: "Patna Airport car hire", city: "Patna", slug: "patna-airport-car-hire" },
    { id: 15, label: "Leh Airport car hire", city: "Leh", slug: "leh-airport-car-hire" },
    { id: 16, label: "Ranchi Airport car hire", city: "Ranchi", slug: "ranchi-airport-car-hire" },
    { id: 17, label: "Kochi Airport car hire", city: "Kochi", slug: "kochi-airport-car-hire" },
    { id: 18, label: "Best car hire at Chandigarh Airport", city: "Chandigarh", slug: "chandigarh-airport-car-hire" },

  ]
}







export {
  carHireInfoCards,
  carHireCards,
  carTypeTabs,
  carList,
  carRentalBrands,
  rentalHighlights,
  carRentalInfo,
  carHireFaqs,
  navigationTabs,
  articles,
  carHireTabs,
  carHireLinks
}