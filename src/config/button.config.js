const locationTabs = [
  {
    id: 1,
    label: "Country",
    value: "country"
  },
  {
    id: 2,
    label: "City",
    value: "city"
  },
  {
    id: 3,
    label: "Region",
    value: "region"
  },
  {
    id: 4,
    label: "Airport",
    value: "airport"
  }
];


const  carHireLocations = {
  country: [
    { id: 1, label: "Best car hire in China", slug: "china" },
    { id: 2, label: "Saudi Arabia car hire", slug: "saudi-arabia" },
    { id: 3, label: "Cheap car hire in Thailand", slug: "thailand" },
    { id: 4, label: "Car hire in Oman", slug: "oman" },
    { id: 5, label: "Cheap car hire in Japan", slug: "japan" },
    { id: 6, label: "Best car hire in Singapore", slug: "singapore" },
    { id: 7, label: "Car hire in United Arab Emirates", slug: "uae" },
    { id: 8, label: "Cheap car hire in India", slug: "india" },
    { id: 9, label: "Sri Lanka car hire", slug: "sri-lanka" },
    { id: 10, label: "Maldives car hire", slug: "maldives" },
    { id: 11, label: "Malaysia car hire", slug: "malaysia" },
    { id: 12, label: "Cheap return tickets to Maldives", slug: "maldives-flights" },
    { id: 13, label: "Car hire in Vietnam", slug: "vietnam" },
    { id: 14, label: "Cheap car hire in United States", slug: "united-states" },
    { id: 15, label: "Plane tickets to United Arab Emirates", slug: "uae-flights" },
    { id: 16, label: "Car hire in Indonesia", slug: "indonesia" },
    { id: 17, label: "Philippines car hire", slug: "philippines" },
    { id: 18, label: "Cheap return flights to Thailand", slug: "thailand-flights" },
    { id: 19, label: "Cheap tickets to Singapore", slug: "singapore-tickets" },
    { id: 20, label: "Flights to Japan", slug: "japan-flights" },
    { id: 21, label: "Cheap return tickets to Sri Lanka", slug: "sri-lanka-return-tickets" },
    { id: 22, label: "Return tickets to India", slug: "india-return-tickets" },
    { id: 23, label: "Cheap return tickets to Italy", slug: "italy-return-tickets" },
    { id: 24, label: "Return plane tickets to Georgia", slug: "georgia-return-tickets" },
    { id: 25, label: "Cheap flights to Philippines", slug: "philippines-cheap-flights" },
    { id: 26, label: "Return plane tickets to Oman", slug: "oman-return-tickets" },
    { id: 27, label: "Cheap tickets to Vietnam", slug: "vietnam-cheap-tickets" },
    { id: 28, label: "Cheap return tickets to United States", slug: "cheap-return-tickets-to-united-states" },
    { id: 29, label: "Return flights to Malaysia", slug: "return-flights-to-malaysia" },
    { id: 30, label: "Cheap return tickets to Indonesia", slug: "cheap-return-tickets-to-indonesia" }
  ],
  city: [
    { id: 1, label: "Book hotels in Chennai", slug: "chennai" },
    { id: 2, label: "Hotels in Bengaluru", slug: "bengaluru" },
    { id: 3, label: "Hotels in Dubai", slug: "dubai" },
    { id: 4, label: "Book hotels deals in Phuket", slug: "phuket" },
    { id: 5, label: "Cheap hotels deals in Ahmedabad", slug: "ahmedabad" },
    { id: 6, label: "Hotels deals in Jaipur", slug: "jaipur" },
    { id: 7, label: "Book hotels in Ho Chi Minh City", slug: "ho-chi-minh-city" },
    { id: 8, label: "Cheap hotels in Kuala Lumpur", slug: "kuala-lumpur" },
    { id: 9, label: "Book hotels in Guwahati", slug: "guwahati" }
  ],
  region: [
    { id: 1, label: "Tickets to Lombardy", slug: "lombardy" },
    { id: 2, label: "Return flights to Catalonia", slug: "catalonia" },
    { id: 3, label: "Flights to Dubai", slug: "dubai" },
    { id: 4, label: "Cheap tickets to Andalusia", slug: "andalusia" },
    { id: 5, label: "Return flights to Bangkok", slug: "bangkok" },
    { id: 6, label: "Cheap flights to Canary Islands", slug: "canary-islands" },
    { id: 7, label: "Return plane tickets to England", slug: "england" },
    { id: 8, label: "Cheap return flights to Kantō", slug: "kanto" },
    { id: 9, label: "Cheap flights to Istanbul Province", slug: "istanbul-province" },
    { id: 10, label: "Plane tickets to Delhi NCR", slug: "plane-tickets-to-delhi-ncr" },
    { id: 11, label: "Return tickets to Île-de-France", slug: "return-tickets-to-ile-de-france" },
    { id: 12, label: "Return plane tickets to Kyushu-Okinawa", slug: "return-plane-tickets-to-kyushu-okinawa" },

    { id: 13, label: "Return tickets to Lazio", slug: "return-tickets-to-lazio" },
    { id: 14, label: "Cheap return tickets to Balearic Islands", slug: "cheap-return-tickets-to-balearic-islands" },
    { id: 15, label: "Cheap flights to New York", slug: "cheap-flights-to-new-york" },

    { id: 16, label: "Car hire in Andhra Pradesh", slug: "car-hire-in-andhra-pradesh" },
    { id: 17, label: "Cheap car hire in Telangana", slug: "cheap-car-hire-in-telangana" },
    { id: 18, label: "Cheap car hire in Gujarat", slug: "cheap-car-hire-in-gujarat" },

    { id: 19, label: "Car hire in West Bengal", slug: "car-hire-in-west-bengal" },
    { id: 20, label: "Car hire in Jammu and Kashmir", slug: "car-hire-in-jammu-and-kashmir" },
    { id: 21, label: "Cheap car hire in Dubai", slug: "cheap-car-hire-in-dubai" },

    { id: 22, label: "Car hire in Karnataka", slug: "car-hire-in-karnataka" },
    { id: 23, label: "Car hire in Delhi NCR", slug: "car-hire-in-delhi-ncr" },
    { id: 24, label: "Car hire in Bihar", slug: "car-hire-in-bihar" },

    { id: 25, label: "Car hire in Goa", slug: "car-hire-in-goa" },
    { id: 26, label: "Car hire in England", slug: "car-hire-in-england" },
    { id: 27, label: "Cheap car hire in Bangkok", slug: "cheap-car-hire-in-bangkok" },

    { id: 28, label: "Car hire in Tamil Nadu", slug: "car-hire-in-tamil-nadu" },
    { id: 29, label: "Car hire in Kerala", slug: "car-hire-in-kerala" },
    { id: 30, label: "Car hire in Maharashtra", slug: "car-hire-in-maharashtra" }

  ],
  airport: [
    { id: 1, label: "Return tickets to Srinagar", slug: "srinagar" },
    { id: 2, label: "Cheap return flights to Lucknow", slug: "lucknow" },
    { id: 3, label: "Cheap return tickets to Chennai", slug: "chennai" },
    { id: 4, label: "Cheap flights to Ahmedabad", slug: "ahmedabad" },
    { id: 5, label: "Cheap tickets to Chandigarh", slug: "chandigarh" },
    { id: 6, label: "Cheap tickets to Zayed International", slug: "zayed-international" },
    { id: 7, label: "Cheap flights to Goa Dabolim", slug: "goa-dabolim" },
    { id: 8, label: "Flights to Phuket", slug: "phuket" },
    { id: 9, label: "Flights to Bagdogra", slug: "bagdogra" }
  ]
}

export {
  locationTabs,
  carHireLocations
}


