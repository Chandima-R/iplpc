export const tourPlans = [
    {
        id: 1,
        tourPlanName: "City Explorer",
        destinations: "New York City",
        duration: 4,
        description: "Explore the vibrant energy of the Big Apple. Visit iconic landmarks, trendy neighborhoods, and world-class museums.",
        itinerary: [
          { day: 1, activities: ["Arrival", "Times Square"], overnightStay: "Comfortable Hotels" },
          { day: 2, activities: ["Central Park", "Museums"], overnightStay: "Comfortable Hotels" },
          { day: 3, activities: ["Statue of Liberty", "Ellis Island"], overnightStay: "Comfortable Hotels" },
          { day: 4, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Comfortable Hotels",
        inclusions: ["Guided Tours", "Museum Tickets"],
        exclusions: ["Meals", "Personal Expenses"],
        highlights: ["Times Square", "Central Park", "Statue of Liberty"],
        reviews: "Fantastic trip! The guide was knowledgeable and friendly.",
        imageURL: "/images/tour-plan/tour1.jpg",
        map: "https://maps.example.com/city-explorer",
        contactInformation: "info@cityexplorer.com"
      },
      {
        id: 2,
        tourPlanName: "Mountain Adventure",
        destinations: "Rocky Mountains",
        duration: 7,
        description: "Embark on a thrilling adventure in the Rocky Mountains. Hike through scenic trails, camp under the stars, and witness breathtaking mountain views.",
        itinerary: [
          { day: 1, activities: ["Arrival", "Trailhead Hike"], overnightStay: "Camping Site" },
          { day: 2, activities: ["Alpine Lake Exploration"], overnightStay: "Camping Site" },
          { day: 3, activities: ["Rock Climbing", "Campfire"], overnightStay: "Camping Site" },
          { day: 4, activities: ["Mountain Summit Trek"], overnightStay: "Mountain Hut" },
          { day: 5, activities: ["Descent", "Stargazing"], overnightStay: "Camping Site" },
          { day: 6, activities: ["Relaxation Day"], overnightStay: "Camping Site" },
          { day: 7, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Camping",
        inclusions: ["Guided Hikes", "Camping Equipment"],
        exclusions: ["Meals (except camping meals)", "Personal Expenses"],
        highlights: ["Alpine Lakes", "Mountain Summit", "Stargazing"],
        reviews: "An unforgettable adventure in the heart of the Rockies!",
        imageURL: "/images/tour-plan/tour2.jpg",
        map: "https://maps.example.com/mountain-adventure",
        contactInformation: "info@mountainadventure.com"
      },
      {
        id: 3,
        tourPlanName: "Historical Journey",
        destinations: "Rome and Athens",
        duration: 10,
        description: "Step back in time with a historical journey through Rome and Athens. Explore ancient ruins, marvel at classical architecture, and immerse yourself in rich history.",
        itinerary: [
          { day: 1, activities: ["Arrival in Rome", "Colosseum"], overnightStay: "Historic Hotel" },
          { day: 2, activities: ["Roman Forum", "Pantheon"], overnightStay: "Historic Hotel" },
          { day: 3, activities: ["Vatican City", "Sistine Chapel"], overnightStay: "Historic Hotel" },
          { day: 4, activities: ["Travel to Athens"], overnightStay: "Modern Hotel" },
          { day: 5, activities: ["Acropolis", "Parthenon"], overnightStay: "Modern Hotel" },
          { day: 6, activities: ["Ancient Agora", "Temple of Olympian Zeus"], overnightStay: "Modern Hotel" },
          { day: 7, activities: ["Delphi Day Trip"], overnightStay: "Modern Hotel" },
          { day: 8, activities: ["Free Day in Athens"], overnightStay: "Modern Hotel" },
          { day: 9, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Combination of Historic and Modern Hotels",
        inclusions: ["Guided Tours", "Entrance Fees"],
        exclusions: ["Meals", "Personal Expenses"],
        highlights: ["Colosseum", "Acropolis", "Sistine Chapel"],
        reviews: "A captivating journey through the cradle of civilization.",
        imageURL: "/images/tour-plan/tour3.jpg",
        map: "https://maps.example.com/historical-journey",
        contactInformation: "info@historicaljourney.com"
      },
      {
        id: 4,
        tourPlanName: "Tropical Paradise Getaway",
        destinations: "Maldives",
        duration: 7,
        description: "Escape to a tropical paradise in the Maldives. Enjoy pristine beaches, crystal-clear waters, and overwater bungalow luxury.",
        itinerary: [
          { day: 1, activities: ["Arrival and Resort Check-in"], overnightStay: "Overwater Bungalow" },
          { day: 2, activities: ["Snorkeling Excursion", "Island Exploration"], overnightStay: "Overwater Bungalow" },
          { day: 3, activities: ["Spa Day", "Beach Relaxation"], overnightStay: "Overwater Bungalow" },
          { day: 4, activities: ["Water Villa Experience"], overnightStay: "Water Villa" },
          { day: 5, activities: ["Dolphin Cruise", "Sunset Dinner"], overnightStay: "Water Villa" },
          { day: 6, activities: ["Free Day for Leisure"], overnightStay: "Water Villa" },
          { day: 7, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Luxury Overwater Bungalows and Water Villas",
        inclusions: ["Snorkeling Gear", "Spa Access"],
        exclusions: ["Meals (except specified dinners)", "Personal Expenses"],
        highlights: ["Overwater Bungalows", "Dolphin Cruise", "Crystal-clear Waters"],
        reviews: "A dreamlike experience in the heart of the Indian Ocean.",
        imageURL: "/images/tour-plan/tour4.jpg",
        map: "https://maps.example.com/tropical-getaway",
        contactInformation: "info@tropicalgetaway.com"
      },
      {
        id: 5,
        tourPlanName: "Safari Adventure",
        destinations: "Maasai Mara, Kenya",
        duration: 5,
        description: "Embark on a thrilling safari adventure in the heart of Maasai Mara. Witness the incredible wildlife, enjoy game drives, and experience the magic of the African savannah.",
        itinerary: [
          { day: 1, activities: ["Arrival and Game Drive"], overnightStay: "Safari Lodge" },
          { day: 2, activities: ["Morning Safari", "Maasai Village Visit"], overnightStay: "Safari Lodge" },
          { day: 3, activities: ["Hot Air Balloon Safari", "Afternoon Game Drive"], overnightStay: "Safari Lodge" },
          { day: 4, activities: ["Relaxation Day", "Bush Dinner"], overnightStay: "Safari Lodge" },
          { day: 5, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Luxury Safari Lodge",
        inclusions: ["Game Drives", "Hot Air Balloon Safari"],
        exclusions: ["Meals (except specified dinners)", "Personal Expenses"],
        highlights: ["Big Five", "Maasai Village Experience", "Hot Air Balloon Safari"],
        reviews: "An awe-inspiring journey into the heart of the wild.",
        imageURL: "/images/tour-plan/tour5.jpg",
        map: "https://maps.example.com/safari-adventure",
        contactInformation: "info@safariadventure.com"
      },
      {
        id: 6,
        tourPlanName: "Cultural Odyssey",
        destinations: "Kyoto and Seoul",
        duration: 8,
        description: "Immerse yourself in the rich cultures of Kyoto and Seoul. Explore ancient temples, traditional tea houses, and modern urban landscapes.",
        itinerary: [
          { day: 1, activities: ["Arrival in Kyoto", "Kinkaku-ji Temple"], overnightStay: "Ryokan" },
          { day: 2, activities: ["Arashiyama Bamboo Grove", "Tea Ceremony"], overnightStay: "Ryokan" },
          { day: 3, activities: ["Fushimi Inari Shrine", "Gion District"], overnightStay: "Ryokan" },
          { day: 4, activities: ["Travel to Seoul"], overnightStay: "Modern Hotel" },
          { day: 5, activities: ["Gyeongbokgung Palace", "Insadong"], overnightStay: "Modern Hotel" },
          { day: 6, activities: ["N Seoul Tower", "Hanbok Experience"], overnightStay: "Modern Hotel" },
          { day: 7, activities: ["Free Day for Shopping"], overnightStay: "Modern Hotel" },
          { day: 8, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Combination of Traditional Ryokan and Modern Hotel",
        inclusions: ["Guided Tours", "Tea Ceremony", "Hanbok Experience"],
        exclusions: ["Meals", "Personal Expenses"],
        highlights: ["Arashiyama", "Gyeongbokgung Palace", "Insadong"],
        reviews: "A delightful journey blending tradition and modernity.",
        imageURL: "/images/tour-plan/tour6.jpg",
        map: "https://maps.example.com/cultural-odyssey",
        contactInformation: "info@culturalodyssey.com"
      },
      {
        id: 7,
        tourPlanName: "Mystical Northern Lights",
        destinations: "Reykjavik, Iceland",
        duration: 6,
        description: "Chase the magical Northern Lights in Reykjavik, Iceland. Experience the beauty of the aurora borealis, relax in geothermal hot springs, and explore stunning landscapes.",
        itinerary: [
          { day: 1, activities: ["Arrival and City Exploration"], overnightStay: "Hotel" },
          { day: 2, activities: ["Golden Circle Tour", "Geysir"], overnightStay: "Hotel" },
          { day: 3, activities: ["Northern Lights Hunt", "Hot Springs"], overnightStay: "Hotel" },
          { day: 4, activities: ["Blue Lagoon Relaxation"], overnightStay: "Hotel" },
          { day: 5, activities: ["Snowmobiling Adventure", "Ice Cave Exploration"], overnightStay: "Hotel" },
          { day: 6, activities: ["Departure"], overnightStay: "None" }
        ],
        accommodation: "Comfortable Hotel",
        inclusions: ["Northern Lights Hunt", "Blue Lagoon Entry", "Snowmobiling Adventure"],
        exclusions: ["Meals", "Personal Expenses"],
        highlights: ["Aurora Borealis", "Golden Circle", "Blue Lagoon"],
        reviews: "A mesmerizing journey under the dancing Northern Lights.",
        imageURL: "/images/tour-plan/tour7.jpg",
        map: "https://maps.example.com/northern-lights",
        contactInformation: "info@mysticalnlights.com"
      },
]