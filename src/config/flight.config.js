import { IoMdAirplane, IoMdPricetag } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

import { MdSwapHoriz, MdHotel } from "react-icons/md";



import baku from '../assets/baku.jpg';
import bangkok from '../assets/bangkok.jpg';
import bhatinda from '../assets/bhatinda.svg';
import dhaka from '../assets/dhaka.jpg';
import dubai from '../assets/dubai.jpg';
import hoChiMinhCity from '../assets/Ho-Chi-Minh-City-SGN.webp';
// import hotel from '../assets/hotel.webp';
import kathmandu from '../assets/kathmandu.jpg';
import kualaLumpur from '../assets/kualaLumpur.jpg';
import kuwait from '../assets/kuwait.jpg';
import muscat from '../assets/muscat.jpg';
import singapore from '../assets/Singapore.jpg';
import tashkent from '../assets/tashkent.jpg';

// flightBenefits
import img1 from '../assets/image1.svg'
import img2 from '../assets/image2.svg'
import img3 from '../assets/image3.svg'

const flightFeatures = [
  {
    id: 1,
    icon: IoMdAirplane,
    title: "Explore the best flight deals",
    description:
      "Explore the best flight deals from anywhere, to everywhere, then book with no fees",
  },
  {
    id: 2,
    icon: FaCalendarAlt,
    title: "Compare flight deals",
    description:
      "Compare flight deals from over 1000 providers, and choose the cheapest, fastest or lowest-emission tickets",
  },
  {
    id: 3,
    icon: IoMdPricetag,
    title: "Find the cheapest time to fly",
    description:
      "Find the cheapest month – or even day – to fly, and set up Price Alerts to book when the price is right",
  },
];

const flightDestinations = [
  {
    id: 1,
    city: "Bhatinda",
    country: "India",
    image: bhatinda,
    priceFrom: 3237,
    flights: [
      { date: "Sun, 1 Feb", route: "DEL → BUP", airline: "Alliance Air", direct: true },
      { date: "Sun, 8 Feb", route: "BUP → DEL", airline: "Alliance Air", direct: true }
    ]
  },
  {
    id: 2,
    city: "Kathmandu",
    country: "Nepal",
    image: kathmandu,
    priceFrom: 9972,
    flights: [
      { date: "Sun, 8 Feb", route: "DEL → KTM", airline: "Air India", direct: true },
      { date: "Thu, 12 Feb", route: "KTM → DEL", airline: "Air India", direct: true }
    ]
  },
  {
    id: 3,
    city: "Dhaka",
    country: "Bangladesh",
    image: dhaka,
    priceFrom: 11865,
    flights: [
      { date: "Mon, 16 Feb", route: "DEL → DAC", airline: "Air India", direct: true },
      { date: "Mon, 23 Feb", route: "DAC → DEL", airline: "Air India", direct: true }
    ]
  },
  {
    id: 4,
    city: "Bangkok",
    country: "Thailand",
    image: bangkok,
    priceFrom: 11988,
    flights: [
      { date: "Mon, 23 Feb", route: "DEL → DMK", airline: "Thai Lion Air", direct: true },
      { date: "Mon, 2 Mar", route: "BKK → DEL", airline: "Air India", direct: true }
    ]
  },
  {
    id: 5,
    city: "Tashkent",
    country: "Uzbekistan",
    image: tashkent,
    priceFrom: 13429,
    flights: [
      { date: "Tue, 6 Jan", route: "DEL → TAS", airline: "Centrum Air", direct: true },
      { date: "Fri, 9 Jan", route: "TAS → DEL", airline: "Centrum Air", direct: true }
    ]
  },
  {
    id: 6,
    city: "Kuala Lumpur",
    country: "Malaysia",
    image: kualaLumpur,
    priceFrom: 14965,
    flights: [
      { date: "Wed, 14 Jan", route: "DEL → KUL", airline: "AirAsia X", direct: true },
      { date: "Mon, 19 Jan", route: "KUL → DEL", airline: "AirAsia X", direct: true }
    ]
  },
  {
    id: 7,
    city: "Muscat",
    country: "Oman",
    image: muscat,
    priceFrom: 17481,
    flights: [
      { date: "Sun, 25 Jan", route: "DEL → MCT", airline: "Air India Express", direct: true },
      { date: "Fri, 13 Feb", route: "MCT → DEL", airline: "Air India Express", direct: true }
    ]
  },
  {
    id: 8,
    city: "Singapore",
    country: "Singapore",
    image: singapore,
    priceFrom: 18610,
    flights: [
      { date: "Thu, 29 Jan", route: "DEL → SIN", airline: "Air India", direct: true },
      { date: "Tue, 3 Feb", route: "SIN → DEL", airline: "Air India", direct: true }
    ]
  },
  {
    id: 9,
    city: "Kuwait",
    country: "Kuwait",
    image: kuwait,
    priceFrom: 19311,
    flights: [
      { date: "Thu, 19 Feb", route: "DEL → KWI", airline: "Kuwait Airways", direct: true },
      { date: "Thu, 26 Feb", route: "KWI → DEL", airline: "Kuwait Airways", direct: true }
    ]
  },
  {
    id: 10,
    city: "Ho Chi Minh City",
    country: "Vietnam",
    image: hoChiMinhCity,
    priceFrom: 19940,
    flights: [
      { date: "Thu, 19 Feb", route: "DEL → SGN", airline: "VietJet Air", direct: true },
      { date: "Wed, 25 Feb", route: "SGN → DEL", airline: "VietJet Air", direct: true }
    ]
  },
  {
    id: 11,
    city: "Dubai",
    country: "United Arab Emirates",
    image: dubai,
    priceFrom: 21935,
    flights: [
      { date: "Wed, 11 Feb", route: "DEL → DXB", airline: "Air India", direct: true },
      { date: "Mon, 16 Feb", route: "DXB → DEL", airline: "IndiGo", direct: true }
    ]
  },
  {
    id: 12,
    city: "Baku",
    country: "Azerbaijan",
    image: baku,
    priceFrom: 22404,
    flights: [
      { date: "Thu, 19 Feb", route: "DEL → GYD", airline: "Azerbaijan Airlines", direct: true },
      { date: "Tue, 24 Feb", route: "GYD → DEL", airline: "Azerbaijan Airlines", direct: true }
    ]
  }
];

const flightFaqs = [
  {
    id: 1,
    question: "How can I find the best flight deals?",
    answer:
      "To find the best flight deals, try booking your tickets in advance and be flexible with your travel dates. Use fare comparison tools, check prices for nearby airports, and consider flying on weekdays when fares are usually lower. Clearing browser cookies or using incognito mode can also help you spot better prices."
  },
  {
    id: 2,
    question: "How can I find the best last minute flight deals?",
    answer:
      "Last minute flight deals are often available when airlines need to fill empty seats. Check flight prices frequently, stay flexible with your destination and travel time, and look for deals during off-peak hours. Signing up for airline alerts can also help you catch last minute discounts."
  },
  {
    id: 3,
    question: "How can I stay updated on flight deals and low fares?",
    answer:
      "You can stay updated by subscribing to fare alerts, newsletters, and notifications from travel websites. Following airlines and travel deal pages on social media is also a great way to get real-time updates on flash sales and special offers."
  },
  {
    id: 4,
    question: "What happens after I've booked my flight?",
    answer:
      "After booking your flight, you’ll receive a confirmation email with your ticket details and booking reference number. You can use this information to check your flight status, manage your booking, select seats, and add baggage if needed. Make sure to check in online before your departure."
  },
  {
    id: 5,
    question: "Where should I book a flight to right now?",
    answer:
      "The best place to book a flight to right now depends on current deals, season, and your travel preferences. Popular destinations often have discounted fares during off-peak seasons, while emerging travel spots may offer great value year-round. Exploring flexible destination options can help you find the best deals."
  }
];

const flightAdvantages = [
  {
    id: 1,
    title: "Search ‘Everywhere’, explore anywhere",
    description:
      "Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.",
    icon: img1
  },
  {
    id: 2,
    title: "Pay less, go further with transparent pricing",
    description:
      "The cheapest flight deals. No hidden fees. No funny business. With us, the price you see when you search is what you’ll pay.",
    icon: img2
  },
  {
    id: 3,
    title: "Book when it’s best with Price Alerts",
    description:
      "Found your flight, but not quite ready to book? Set up Price Alerts and we’ll let you know when the flight price goes up or down.",
    icon: img3
  }
];

const flightKeyPoints = [
  {
    id: 1,
    icon: MdSwapHoriz,
    title: "Find flexible flight deals",
    description:
      "Explore flexible flight ticket deals so you won't lose out if your flight is changed or cancelled.",
  },
  {
    id: 2,
    icon: MdHotel,
    title: "Add hotels and car hire",
    description:
      "Plan your journey with hotels and car hire, and keep your bookings all in one place.",
  },
];

const flightLocationTabs = [
  {
    id: 1,
    label: "Popular cities",
    value: "cities",
  },
  {
    id: 2,
    label: "Popular countries",
    value: "countries",
  },
  {
    id: 3,
    label: "Popular flight routes",
    value: "routes",
  },
  {
    id: 4,
    label: "Top airlines",
    value: "airlines",
  },
];

export const popularFlightDestinations = {
  cities: [
    { id: 1, label: "Flights to Berlin Brandenburg", city: "Berlin Brandenburg", slug: "berlin-brandenburg" },
    { id: 2, label: "Flights to Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 3, label: "Flights to Jakarta", city: "Jakarta", slug: "jakarta" },
    { id: 4, label: "Flights to Chicago", city: "Chicago", slug: "chicago" },
    { id: 5, label: "Flights to Colombo", city: "Colombo", slug: "colombo" },
    { id: 6, label: "Flights to Dubai", city: "Dubai", slug: "dubai" },
    { id: 7, label: "Flights to Frankfurt", city: "Frankfurt", slug: "frankfurt" },
    { id: 8, label: "Flights to Istanbul", city: "Istanbul", slug: "istanbul" },
    { id: 9, label: "Flights to Kuala Lumpur", city: "Kuala Lumpur", slug: "kuala-lumpur" },
    { id: 10, label: "Flights to London", city: "London", slug: "london" },
    { id: 11, label: "Flights to Melbourne", city: "Melbourne", slug: "melbourne" },
    { id: 12, label: "Flights to Milan", city: "Milan", slug: "milan" },
    { id: 13, label: "Flights to Moscow", city: "Moscow", slug: "moscow" },
    { id: 14, label: "Flights to New York", city: "New York", slug: "new-york" },
    { id: 15, label: "Flights to Paris", city: "Paris", slug: "paris" },
    { id: 16, label: "Flights to Rome", city: "Rome", slug: "rome" },
    { id: 17, label: "Flights to Seoul", city: "Seoul", slug: "seoul" },
    { id: 18, label: "Flights to Tokyo", city: "Tokyo", slug: "tokyo" },
    { id: 19, label: "Flights to Toronto", city: "Toronto", slug: "toronto" },
    { id: 20, label: "Flights to Vancouver", city: "Vancouver", slug: "vancouver" }
  ],
  countries: [
    { id: 1, label: "Flights to Australia", country: "Australia", slug: "australia" },
    { id: 2, label: "Flights to Canada", country: "Canada", slug: "canada" },
    { id: 3, label: "Flights to China", country: "China", slug: "china" },
    { id: 4, label: "Flights to Germany", country: "Germany", slug: "germany" },
    { id: 5, label: "Flights to Indonesia", country: "Indonesia", slug: "indonesia" },
    { id: 6, label: "Flights to India", country: "India", slug: "india" },
    { id: 7, label: "Flights to Japan", country: "Japan", slug: "japan" },
    { id: 8, label: "Flights to Cambodia", country: "Cambodia", slug: "cambodia" },
    { id: 9, label: "Flights to South Korea", country: "South Korea", slug: "south-korea" },
    { id: 10, label: "Flights to Sri Lanka", country: "Sri Lanka", slug: "sri-lanka" },
    { id: 11, label: "Flights to Maldives", country: "Maldives", slug: "maldives" },
    { id: 12, label: "Flights to Malaysia", country: "Malaysia", slug: "malaysia" },
    { id: 13, label: "Flights to New Zealand", country: "New Zealand", slug: "new-zealand" },
    { id: 14, label: "Flights to Philippines", country: "Philippines", slug: "philippines" },
    { id: 15, label: "Flights to Russia", country: "Russia", slug: "russia" },
    { id: 16, label: "Flights to Saudi Arabia", country: "Saudi Arabia", slug: "saudi-arabia" },
    { id: 17, label: "Flights to Thailand", country: "Thailand", slug: "thailand" },
    { id: 18, label: "Flights to United Kingdom", country: "United Kingdom", slug: "united-kingdom" },
    { id: 19, label: "Flights to United States", country: "United States", slug: "united-states" },
    { id: 20, label: "Flights to Vietnam", country: "Vietnam", slug: "vietnam" }
  ],
  routes: [
    { id: 1, label: "Flights from Ahmedabad to London Heathrow", slug: "flights-from-ahmedabad-to-london-heathrow" },
    { id: 2, label: "Flights from Bengaluru to Delhi Indira Gandhi International", slug: "flights-from-bengaluru-to-delhi-indira-gandhi-international" },
    { id: 3, label: "Flights from Mumbai to Delhi Indira Gandhi International", slug: "flights-from-mumbai-to-delhi-indira-gandhi-international" },
    { id: 4, label: "Flights from Mumbai to Bali (Denpasar)", slug: "flights-from-mumbai-to-bali-denpasar" },
    { id: 5, label: "Flights from Mumbai to Dubai", slug: "flights-from-mumbai-to-dubai" },
    { id: 6, label: "Flights from Mumbai to Goa Dabolim", slug: "flights-from-mumbai-to-goa-dabolim" },
    { id: 7, label: "Flights from Mumbai to London", slug: "flights-from-mumbai-to-london" },
    { id: 8, label: "Flights from Mumbai to Toronto", slug: "flights-from-mumbai-to-toronto" },
    { id: 9, label: "Flights from Delhi Indira Gandhi International to Mumbai", slug: "flights-from-delhi-indira-gandhi-international-to-mumbai" },
    { id: 10, label: "Flights from Delhi Indira Gandhi International to Bali (Denpasar)", slug: "flights-from-delhi-indira-gandhi-international-to-bali-denpasar" },
    { id: 11, label: "Flights from Delhi Indira Gandhi International to Goa Dabolim", slug: "flights-from-delhi-indira-gandhi-international-to-goa-dabolim" },
    { id: 12, label: "Flights from Delhi Indira Gandhi International to New York", slug: "flights-from-delhi-indira-gandhi-international-to-new-york" },
    { id: 13, label: "Flights from Delhi Indira Gandhi International to Dubai", slug: "flights-from-delhi-indira-gandhi-international-to-dubai" },
    { id: 14, label: "Flights from Delhi Indira Gandhi International to London", slug: "flights-from-delhi-indira-gandhi-international-to-london" },
    { id: 15, label: "Flights from Delhi Indira Gandhi International to Sydney", slug: "flights-from-delhi-indira-gandhi-international-to-sydney" },
    { id: 16, label: "Flights from Delhi Indira Gandhi International to Dubai", slug: "flights-from-delhi-indira-gandhi-international-to-dubai" },
    { id: 17, label: "Flights from Delhi Indira Gandhi International to Moscow", slug: "flights-from-delhi-indira-gandhi-international-to-moscow" },
    { id: 18, label: "Flights from Delhi Indira Gandhi International to Toronto", slug: "flights-from-delhi-indira-gandhi-international-to-toronto" },
    { id: 19, label: "Flights from Delhi Indira Gandhi International to Vancouver", slug: "flights-from-delhi-indira-gandhi-international-to-vancouver" },
    { id: 20, label: "Flights from Chennai to London", slug: "flights-from-chennai-to-london" },
  ],
  airlines: [
    { id: 1, label: "Air Arabia flights", country: "United Arab Emirates", slug: "air-arabia-flights" },
    { id: 2, label: "Air Canada flights", country: "Canada", slug: "air-canada-flights" },
    { id: 3, label: "Air India flights", country: "India", slug: "air-india-flights" },
    { id: 4, label: "Air India Express flights", country: "India", slug: "air-india-express-flights" },
    { id: 5, label: "British Airways flights", country: "United Kingdom", slug: "british-airways-flights" },
    { id: 6, label: "Deccan flights", country: "India", slug: "deccan-flights" },
    { id: 7, label: "Emirates flights", country: "United Arab Emirates", slug: "emirates-flights" },
    { id: 8, label: "Flexflight flights", country: "Denmark", slug: "flexflight-flights" },
    { id: 9, label: "Indigo flights", country: "India", slug: "indigo-flights" },
    { id: 10, label: "Klm flights", country: "Netherlands", slug: "klm-flights" },
    { id: 11, label: "Qatar Airways flights", country: "Qatar", slug: "qatar-airways-flights" },
    { id: 12, label: "Sky Airline flights", country: "Chile", slug: "sky-airline-flights" },
    { id: 13, label: "Southern Air Charter flights", country: "Bahamas", slug: "southern-air-charter-flights" },
    { id: 14, label: "Spicejet flights", country: "India", slug: "spicejet-flights" },
    { id: 15, label: "Turkish Airlines flights", country: "Turkey", slug: "turkish-airlines-flights" }
  ]
}








export {
  flightFeatures,
  flightDestinations,
  flightFaqs,
  flightAdvantages,
  flightKeyPoints,
  flightLocationTabs
}