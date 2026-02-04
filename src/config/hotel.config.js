import { FaSearch, FaTags, FaCheckCircle } from "react-icons/fa";
import { FaHotel, FaMapMarkerAlt, FaBed } from "react-icons/fa";

import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'

import hotelImg1 from "../assets/hotelImg1.jpg";
import hotelImg2 from "../assets/hotelImg2.jpg";
import hotelImg3 from "../assets/hotelImg3.jpg";
import hotelImg4 from "../assets/hotelImg4.jpg";
import hotelImg5 from "../assets/hotelImg5.jpg";
import hotelImg6 from "../assets/hotelImg6.jpg";

import hotelCard1 from '../assets/hotelCard1.webp'
import hotelCard2 from '../assets/hotelCard2.webp'
import hotelCard3 from '../assets/hotelCard3.webp'
import hotelCard4 from '../assets/hotelCard4.webp'
import hotelCard5 from '../assets/hotelCard5.webp'
import hotelCard6 from '../assets/hotelCard6.webp'
import hotelCard7 from '../assets/hotelCard7.webp'
import hotelCard8 from '../assets/hotelCard8.webp'
import hotelCard9 from '../assets/hotelCard9.webp'

import dealImg from '../assets/Hotels-Deals.svg'
import pricingImg from '../assets/hotel_bell.svg'
import searchImg from '../assets/hotel_compare_scales.svg'

import summerReportImg from '../assets/coverImg1.jpg'
import firstTripImg from '../assets/coverImg2.jpg'
import disneyLocationsImg from '../assets/coverImg3.jpg'
import cricketFansImg from '../assets/coverImg4.jpg'


const hotelFeatures = [
  {
    id: 1,
    icon: FaSearch,
    title: "Find the best-value hotel",
    description: "Find the best-value hotel for your dates, search by price or preferences"
  },
  {
    id: 2,
    icon: FaTags,
    title: "Compare hotel deals",
    description: "Compare hotel deals across hundreds of providers, all in one place"
  },
  {
    id: 3,
    icon: FaCheckCircle,
    title: "Free cancellation & ratings",
    description: "Look out for hotels with free cancellation or excellent ratings"
  }
];

const travelPartners = [
  {
    id: 1,
    label: "Booking.com",
    slug: "booking-com",
    image: brand1,
  },
  {
    id: 2,
    label: "MakeMyTrip",
    slug: "make-my-trip",
    image: brand2,
  },
  {
    id: 3,
    label: "Trip.com",
    slug: "trip-com",
    image: brand3,
  },
  {
    id: 4,
    label: "Expedia",
    slug: "expedia",
    image: brand4,
  },
  {
    id: 5,
    label: "Hotels.com",
    slug: "hotels-com",
    image: brand5,
  },
  {
    id: 6,
    label: "Agoda",
    slug: "agoda",
    image: brand6,
  },
];

const topLocations = [
  {
    id: 1,
    label: "Hyderabad",
    value: "hyderabad",
  },
  {
    id: 2,
    label: "Bengaluru",
    value: "bengaluru",
  },
  {
    id: 3,
    label: "New Delhi",
    value: "new-delhi",
  },
  {
    id: 4,
    label: "Mumbai",
    value: "mumbai",
  },
  {
    id: 5,
    label: "Jaipur",
    value: "jaipur",
  },
]

const hotelCards = {
  hyderabad: [
    {
      id: 1,
      name: "Hotel O New Hotel Aroma City Centre",
      image: hotelImg1,
      distanceFromCenter: "3.32 km from city centre",
      rating: "★★★☆☆",
      ratingValue: 2.8,
      reviews: 13,
      pricePerNight: 826,
      currency: "₹",
    },
    {
      id: 2,
      name: "SR Continental",
      image: hotelImg2,
      distanceFromCenter: "3.53 km from city centre",
      rating: "★★★★☆",
      ratingValue: 3.8,
      reviews: 52,
      pricePerNight: 1026,
      currency: "₹",
    },
    {
      id: 3,
      name: "The Landmark Banjara Hills",
      image: hotelImg3,
      distanceFromCenter: "6.56 km from city centre",
      rating: "★★★★☆",
      ratingValue: 3.9,
      reviews: 997,
      pricePerNight: 726,
      currency: "₹",
    },
    {
      id: 4,
      name: "Golden Premier Luxury Hotel",
      image: hotelImg4,
      distanceFromCenter: "9.99 km from city centre",
      rating: "★★★★★",
      ratingValue: 4.2,
      reviews: 76,
      pricePerNight: 968,
      currency: "₹",
    },
    {
      id: 5,
      name: "Hotel Green Leaf",
      image: hotelImg5,
      distanceFromCenter: "12.47 km from city centre",
      rating: "★★☆☆☆",
      ratingValue: 2.1,
      reviews: 3,
      pricePerNight: 968,
      currency: "₹",
    },
    {
      id: 6,
      name: "Hotel O R Square Uppal",
      image: hotelImg6,
      distanceFromCenter: "10.72 km from city centre",
      rating: "★★★★☆",
      ratingValue: 3.9,
      reviews: 39,
      pricePerNight: 847,
      currency: "₹",
    },
  ],
  bengaluru: [],
  "new-delhi": [],
  mumbai: [],
  jaipur: []
}

const destinationCards = [
  {
    id: 1,
    city: "Dubai",
    country: "United Arab Emirates",
    price: 614,
    image: hotelCard1,
  },
  {
    id: 2,
    city: "Bangkok",
    country: "Thailand",
    price: 637,
    image: hotelCard2,
  },
  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    price: 619,
    image: hotelCard3,
  },
  {
    id: 4,
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    price: 1846,
    image: hotelCard4,
  },
  {
    id: 5,
    city: "Singapore",
    country: "Singapore",
    price: 2000,
    image: hotelCard5,
  },
  {
    id: 6,
    city: "Denpasar",
    country: "Indonesia",
    price: 608,
    image: hotelCard6,
  },
  {
    id: 7,
    city: "Kuala Lumpur",
    country: "Malaysia",
    price: 640,
    image: hotelCard7,
  },
  {
    id: 8,
    city: "Phuket",
    country: "Thailand",
    price: 795,
    image: hotelCard8,
  },
  {
    id: 9,
    city: "Colombo",
    country: "Sri Lanka",
    price: 722,
    image: hotelCard9,
  },
];

const hotelStats = [
  {
    id: 1,
    icon: FaHotel,
    title: "Hotel brands to choose from",
    value: "60+",
  },
  {
    id: 2,
    icon: FaMapMarkerAlt,
    title: "Hotel destinations to explore",
    value: "5,000+",
  },
  {
    id: 3,
    icon: FaBed,
    title: "Hotels available worldwide",
    value: "3.2 million",
  },
];

const features = [
  {
    id: 1,
    title: "Great hotel deals",
    description:
      "We search for deals with the world’s leading hotels, and share our findings with you.",
    icon: dealImg // or deal.svg / deal.webp
  },
  {
    id: 2,
    title: "Up-to-date pricing",
    description:
      "We always show you the most recent pricing overview we can find, so you know exactly what to expect.",
    icon: pricingImg // or bell.svg / bell.webp
  },
  {
    id: 3,
    title: "Precise searching",
    description:
      "Find hotels with swimming pools, free cancellation, and flexible booking. Or whatever matters most to you.",
    icon: searchImg // or filter.svg / filter.webp
  }
];


const hotelFAQs = [
  {
    id: 1,
    question: "How does Skyscanner rank hotels?",
    answer:
      "Hotels on Skyscanner are ranked using a combination of factors such as price, popularity, location, guest reviews, and relevance to your search. This helps surface the best-value options first while still giving you the flexibility to sort results your own way."
  },
  {
    id: 2,
    question: "Do I book my hotel directly through Skyscanner?",
    answer:
      "No, Skyscanner doesn’t handle hotel bookings directly. Instead, we show you the best available prices and then redirect you to our trusted partners or the hotel’s website to complete your booking securely."
  },
  {
    id: 3,
    question: "How do I know I’m getting a price that reflects the best value?",
    answer:
      "We compare prices from hundreds of travel sites and show you all available options in one place. You can also check guest ratings, amenities, and location details to make sure the price matches the value you’re getting."
  },
  {
    id: 4,
    question: "How can Skyscanner help me plan my trip?",
    answer:
      "Skyscanner helps you plan your trip by letting you compare hotels, flights, and car rentals in one place. You can explore destinations, track prices, and filter results based on what matters most to you—like budget, location, or flexibility."
  },
  {
    id: 5,
    question: "Help! I have too many options. How can I decide which hotel to choose?",
    answer:
      "Use filters to narrow down your options by price, star rating, amenities, guest reviews, and location. Reading recent reviews and comparing value-for-money scores can also make choosing the right hotel much easier."
  },
  {
    id: 6,
    question: "Will booking a hotel at the last minute be cheaper?",
    answer:
      "Sometimes last-minute deals can be cheaper, especially if hotels are trying to fill empty rooms. However, prices can also increase during busy periods, so booking early often gives you more choice and better peace of mind."
  },
  {
    id: 7,
    question: "Are hotels cheaper at certain times of the year than others?",
    answer:
      "Yes, hotel prices often vary by season. Traveling during off-peak or shoulder seasons usually means lower prices and fewer crowds, while holidays and major events can drive prices higher."
  }
];

const inspirationArticles = [
  {
    id: 1,
    title: "The Smarter Summer Report",
    publishedAt: "10 June 2025",
    source: "Skyscanner",
    coverImage: summerReportImg,
    slug: "smarter-summer-report",
  },
  {
    id: 2,
    title: "Expert advice: Planning your first independent trip",
    publishedAt: "23 April 2024",
    source: "Skyscanner",
    coverImage: firstTripImg,
    slug: "planning-your-first-independent-trip",
  },
  {
    id: 3,
    title: "All you need to know about Disney locations from around the world",
    publishedAt: "20 March 2025",
    source: "Skyscanner",
    coverImage: disneyLocationsImg,
    slug: "disney-locations-around-the-world",
  },
  {
    id: 4,
    title: "Are Indian cricket fans the best cricket fans in the world?",
    publishedAt: "16 October 2023",
    source: "Noelia Guinon",
    coverImage: cricketFansImg,
    slug: "are-indian-cricket-fans-the-best",
  },
];

const categoriesTabs = [
  {
    id: 1,
    label: "Popular cities",
    value: "cities",
  },
  {
    id: 2,
    label: "Popular neighbourhoods",
    value: "neighbourhoods",
  },
  {
    id: 3,
    label: "Hotels by star rating",
    value: "starRating",
  },
  {
    id: 4,
    label: "Top countries",
    value: "countries",
  },
];

const hotelLinks = {
  cities: [
    { id: 1, label: "Hotels in Kochi", city: "Kochi", slug: "kochi" },
    { id: 2, label: "Hotels deals in Ahmedabad", city: "Ahmedabad", slug: "ahmedabad" },
    { id: 3, label: "Book hotels in Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 4, label: "Hotels in Dubai", city: "Dubai", slug: "dubai" },
    { id: 5, label: "Hotels deals in Kolkata", city: "Kolkata", slug: "kolkata" },
    { id: 6, label: "Cheap hotels deals in Hanoi", city: "Hanoi", slug: "hanoi" },
    { id: 7, label: "Cheap hotels deals in Port Blair", city: "Port Blair", slug: "port-blair" },
    { id: 8, label: "Book hotels deals in Patna", city: "Patna", slug: "patna" },
    { id: 9, label: "Book hotels deals in Chandigarh", city: "Chandigarh", slug: "chandigarh" },
    { id: 10, label: "Hotels in New York", city: "New York", slug: "new-york" },
    { id: 11, label: "Hotels in Ho Chi Minh City", city: "Ho Chi Minh City", slug: "ho-chi-minh-city" },
    { id: 12, label: "Book hotels deals in Bhubaneswar", city: "Bhubaneswar", slug: "bhubaneswar" },
    { id: 13, label: "Book hotels in Dehradun", city: "Dehradun", slug: "dehradun" },
    { id: 14, label: "Book hotels deals in Chennai", city: "Chennai", slug: "chennai" },
    { id: 15, label: "Cheap hotels in Mumbai", city: "Mumbai", slug: "mumbai" },
    { id: 16, label: "Hotels in Kuala Lumpur", city: "Kuala Lumpur", slug: "kuala-lumpur" },
    { id: 17, label: "Cheap hotels in Colombo", city: "Colombo", slug: "colombo" },
    { id: 18, label: "Cheap hotels deals in Abu Dhabi", city: "Abu Dhabi", slug: "abu-dhabi" },
    { id: 19, label: "Hotels deals in Goa", city: "Goa", slug: "goa" },
    { id: 20, label: "Hotels deals in Tokyo", city: "Tokyo", slug: "tokyo" },
    { id: 21, label: "Book hotels deals in Ranchi", city: "Ranchi", slug: "ranchi" },
    { id: 22, label: "Hotels in Lucknow", city: "Lucknow", slug: "lucknow" },
    { id: 23, label: "Hotels deals in New Delhi", city: "New Delhi", slug: "new-delhi" },
    { id: 24, label: "Book hotels deals in Guwahati", city: "Guwahati", slug: "guwahati" },
    { id: 25, label: "Book hotels deals in Bengaluru", city: "Bengaluru", slug: "bengaluru" },
    { id: 26, label: "Hotels deals in Pune", city: "Pune", slug: "pune" },
    { id: 27, label: "Cheap hotels deals in Phuket", city: "Phuket", slug: "phuket" },
  ],
  neighbourhoods: [
    { id: 1, label: "Hotels in Juhu", city: "Juhu", slug: "juhu" },
    { id: 2, label: "Hotels in Times Square", city: "Times Square", slug: "times-square" },
    { id: 3, label: "Book hotels in Mumbai Suburban District", city: "Mumbai Suburban District", slug: "mumbai-suburban-district" },
    { id: 4, label: "Cheap hotels in Goregaon", city: "Goregaon", slug: "goregaon" },
    { id: 5, label: "Cheap hotels deals in Manhattan", city: "Manhattan", slug: "manhattan" },
    { id: 6, label: "Cheap hotels deals in Al Barsha", city: "Al Barsha", slug: "al-barsha" },
    { id: 7, label: "Hotels in Shinjuku", city: "Shinjuku", slug: "shinjuku" },
    { id: 8, label: "Cheap hotels in Little India", city: "Little India", slug: "little-india" },
    { id: 9, label: "Cheap hotels in Mumbai City", city: "Mumbai City", slug: "mumbai-city" },
    { id: 9, label: "Cheap hotels deals in Central London", city: "Central London", slug: "central-london" },
    { id: 10, label: "Hotels in Dwarka", city: "Dwarka", slug: "dwarka" },
    { id: 11, label: "Cheap hotels deals in Connaught Place", city: "Connaught Place", slug: "connaught-place" },
    { id: 12, label: "Book hotels in District 1", city: "District 1", slug: "district-1" },
    { id: 13, label: "Hotels deals in Marathahalli", city: "Marathahalli", slug: "marathahalli" },
    { id: 14, label: "Cheap hotels in Shibuya", city: "Shibuya", slug: "shibuya" },
    { id: 15, label: "Book hotels in The Palm Jumeirah", city: "The Palm Jumeirah", slug: "the-palm-jumeirah" },
    { id: 16, label: "Cheap hotels in Bur Dubai", city: "Bur Dubai", slug: "bur-dubai" },
    { id: 17, label: "Cheap hotels deals in Al Haram", city: "Al Haram", slug: "al-haram" },
    { id: 18, label: "Book hotels deals in Colaba", city: "Colaba", slug: "colaba" },
    { id: 19, label: "Book hotels deals in Saket", city: "Saket", slug: "saket" },
    { id: 20, label: "Hotels deals in Yas Island", city: "Yas Island", slug: "yas-island" },
    { id: 21, label: "Cheap hotels deals in Fort Kochi", city: "Fort Kochi", slug: "fort-kochi" },
    { id: 22, label: "Hotels deals in Mahipalpur", city: "Mahipalpur", slug: "mahipalpur" },
    { id: 23, label: "Hotels in Deira", city: "Deira", slug: "deira" },
    { id: 24, label: "Hotels in Khandala", city: "Khandala", slug: "khandala" },
    { id: 25, label: "Hotels in Khandala", city: "Khandala", slug: "khandala" },

  ],
  starRating: [
    { id: 1, label: "4-star hotels deals in Hyderabad", city: "Hyderabad", slug: "hyderabad" },
    { id: 2, label: "4-star hotels deals in Kolkata", city: "Kolkata", slug: "kolkata" },
    { id: 3, label: "4-star hotels in Bengaluru", city: "Bengaluru", slug: "bengaluru" },
    { id: 4, label: "Book 4-star hotels deals in Mumbai", city: "Mumbai", slug: "mumbai" },
    { id: 5, label: "Cheap 4-star hotels deals in Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 6, label: "Cheap 4-star hotels deals in Pune", city: "Pune", slug: "pune" },
    { id: 7, label: "Cheap 4-star hotels deals in Goa", city: "Goa", slug: "goa" },
    { id: 8, label: "Book 4-star hotels deals in New Delhi", city: "New Delhi", slug: "new-delhi" },
    { id: 9, label: "4-star hotels in Chennai", city: "Chennai", slug: "chennai" },
    { id: 10, label: "4-star hotels in Dubai", city: "Dubai", slug: "dubai" },
    { id: 11, label: "Cheap 3-star hotels deals in Pune", city: "Pune", slug: "pune" },
    { id: 12, label: "Cheap 3-star hotels in New Delhi", city: "New Delhi", slug: "new-delhi" },
    { id: 13, label: "3-star hotels deals in Chennai", city: "Chennai", slug: "chennai" },
    { id: 14, label: "Book 3-star hotels in Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 15, label: "Book 3-star hotels in Mumbai", city: "Mumbai", slug: "mumbai" },
    { id: 16, label: "Cheap 3-star hotels in Goa", city: "Goa", slug: "goa" },
    { id: 17, label: "3-star hotels deals in Kolkata", city: "Kolkata", slug: "kolkata" },
    { id: 18, label: "Cheap 3-star hotels deals in Bengaluru", city: "Bengaluru", slug: "bengaluru" },
    { id: 19, label: "Cheap 3-star hotels in Hyderabad", city: "Hyderabad", slug: "hyderabad" },
    { id: 20, label: "Book 3-star hotels deals in Dubai", city: "Dubai", slug: "dubai" },
    { id: 21, label: "5-star hotels deals in Bengaluru", city: "Bengaluru", slug: "bengaluru" },
    { id: 22, label: "Book 5-star hotels deals in Pune", city: "Pune", slug: "pune" },
    { id: 23, label: "5-star hotels in Dubai", city: "Dubai", slug: "dubai" },
    { id: 24, label: "Cheap 5-star hotels in Hyderabad", city: "Hyderabad", slug: "hyderabad" },
    { id: 25, label: "Cheap 5-star hotels in New Delhi", city: "New Delhi", slug: "new-delhi" },
    { id: 26, label: "Book 5-star hotels in Bangkok", city: "Bangkok", slug: "bangkok" },
    { id: 27, label: "Book 5-star hotels in Goa", city: "Goa", slug: "goa" }
  ],
  countries: [
    { id: 1, label: "Popular hotels in United States", city: "United States", slug: "united-states" },
    { id: 2, label: "Popular hotels in China", city: "China", slug: "china" },
    { id: 3, label: "Popular hotels in Singapore", city: "Singapore", slug: "singapore" },
    { id: 4, label: "Popular hotels in Malaysia", city: "Malaysia", slug: "malaysia" },
    { id: 5, label: "Popular hotels in Oman", city: "Oman", slug: "oman" },
    { id: 6, label: "Popular hotels in Philippines", city: "Philippines", slug: "philippines" },
    { id: 7, label: "Popular hotels in Italy", city: "Italy", slug: "italy" },
    { id: 8, label: "Popular hotels in Nepal", city: "Nepal", slug: "nepal" },
    { id: 9, label: "Popular hotels in Saudi Arabia", city: "Saudi Arabia", slug: "saudi-arabia" },
    { id: 10, label: "Popular hotels in India", city: "India", slug: "india" },
    { id: 11, label: "Popular hotels in United Arab Emirates", city: "United Arab Emirates", slug: "united-arab-emirates" },
    { id: 12, label: "Popular hotels in Georgia", city: "Georgia", slug: "georgia" },
    { id: 13, label: "Popular hotels in Vietnam", city: "Vietnam", slug: "vietnam" },
    { id: 14, label: "Popular hotels in Maldives", city: "Maldives", slug: "maldives" },
    { id: 15, label: "Popular hotels in Sri Lanka", city: "Sri Lanka", slug: "sri-lanka" },
    { id: 16, label: "Popular hotels in Japan", city: "Japan", slug: "japan" },
    { id: 17, label: "Popular hotels in Canada", city: "Canada", slug: "canada" },
    { id: 18, label: "Popular hotels in Thailand", city: "Thailand", slug: "thailand" },
    { id: 19, label: "Popular hotels in United Kingdom", city: "United Kingdom", slug: "united-kingdom" },
    { id: 20, label: "Popular hotels in Indonesia", city: "Indonesia", slug: "indonesia" }
  ]
};







export {
  hotelFeatures,
  travelPartners,
  topLocations,
  hotelCards,
  destinationCards,
  hotelStats,
  features,
  hotelFAQs,
  inspirationArticles,
  categoriesTabs,
  hotelLinks
}