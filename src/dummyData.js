// User Dummy Data

export const users = [
  {
    firstName: 'Ray',
    lastName: 'Garreth',
    picture: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    firstName: 'Sandro',
    lastName: 'Berger',
    picture: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
  {
    firstName: 'Sandro',
    lastName: 'Berger',
    picture: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
  {
    firstName: 'Hiroshi',
    lastName: 'Takashi',
    picture: 'https://randomuser.me/api/portraits/men/29.jpg'
  },
  {
    firstName: 'Lucy',
    lastName: 'Johnson',
    picture: 'https://randomuser.me/api/portraits/women/34.jpg'
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    picture: 'https://randomuser.me/api/portraits/men/42.jpg'
  }
];


// Houses Dummy Data
export const houses = [
  {
    id: 1,
    location: 'Koh Phangan, Thailand',
    rooms: 3,
    bathrooms: 4,
    description: 'This house.... is a very very very fine house!',
    price: 700,
    rating: 4.2,
    host: users[0]
  },
  {
    id: 2,
    location: 'Lake District, UK',
    rooms: 5,
    bathrooms: 3,
    description: 'Charming cottage with stunning lake views.',
    price: 850,
    rating: 4.7,
    host: users[1]
  },
  {
    id: 3,
    location: 'Santorini, Greece',
    rooms: 2,
    bathrooms: 2,
    description: 'Luxurious villa with a breathtaking sunset view.',
    price: 950,
    rating: 4.9,
    host: users[2]
  },
  {
    id: 4,
    location: 'Kyoto, Japan',
    rooms: 4,
    bathrooms: 2,
    description: 'Traditional Japanese house in a peaceful neighborhood.',
    price: 600,
    rating: 4.5,
    host: users[3]
  },
  {
    id: 5,
    location: 'Queenstown, New Zealand',
    rooms: 3,
    bathrooms: 3,
    description: 'Modern home with stunning mountain views.',
    price: 800,
    rating: 4.6,
    host: users[4]  // Reference to Lucy Johnson
  },
  {
    id: 6,
    location: 'Aspen, Colorado, USA',
    rooms: 6,
    bathrooms: 5,
    description: 'Luxury ski chalet close to the slopes.',
    price: 1200,
    rating: 4.8,
    host: users[5]  // Reference to Michael Brown
  }
];




// Reviews Dummy Data

export const reviews = [
  {
    id: 1,
    house_id: houses[0].id,
    author: users[0],
    date: '2 Feb 2024',
    rating: 5,
    content:
      "Loved this charming Airbnb in Koh Phangan. Beautifully nestled in nature, it offers peace and stunning views. Comfortable, well-equipped, and close to local attractions. Host was welcoming and helpful. A tranquil retreat with a lovely pool and deck. Note: limited Wi-Fi and steep access. Highly recommend!"
  },
  {
    id: 2,
    house_id: houses[0].id,
    author: users[1],
    date: '5 Jan 2024',
    rating: 4,
    content:
      "On the positive side, the location was fantastic – just a short walk to the beach and local eateries. The view from the balcony was breathtaking, especially during sunsets. However, the house itself left a bit to be desired. The decor was charming with a beach theme, but the cleanliness wasn't up to par; we found dust in several corners, and the bathroom fixtures were somewhat dated. The amenities listed were all present, but the Wi-Fi was frustratingly slow and unreliable. Additionally, while the host was polite, their response time was slower than expected, complicating the check-in process more than necessary. It's a decent place if you're not overly concerned about the finer details and are more focused on the location."
    },
  {
    id: 3,
    house_id: houses[1].id,
    author: users[2],
    date: '15 Mar 2024',
    rating: 4.5,
    content:
      "The Lake District cottage was a dream! The views are unmatched, and the atmosphere is so serene. The house was spacious and had a quaint, rustic charm. Loved the fireplace! The host, James, was super friendly and gave great local tips. Only minor issue was the water pressure in the shower, but overall, a fantastic stay."
  },
  {
    id: 4,
    house_id: houses[2].id,
    author: users[3],
    date: '10 Apr 2024',
    rating: 5,
    content:
      "Staying in Santorini was a lifetime experience, thanks to this amazing villa. The sunset view was out of this world, and the villa itself was luxurious and well-maintained. Elena was a gracious host, always ready to assist. Highly recommended for a romantic getaway!"
  },
  {
    id: 5,
    house_id: houses[3].id,
    author: users[4],
    date: '20 May 2024',
    rating: 4.8,
    content:
      "Our stay in Kyoto was enhanced by this traditional Japanese house. It was a peaceful retreat after a day of exploring. Hiroshi, the host, was very knowledgeable about the local culture. The house was clean, and the traditional beds were surprisingly comfortable."
  },
  {
    id: 6,
    house_id: houses[4].id,
    author: users[5],
    date: '7 Jun 2024',
    rating: 4.7,
    content:
      "The modern home in Queenstown was just perfect. Waking up to the mountain views each morning was breathtaking. Lucy was an excellent host, providing us with all the amenities we needed. The house was a bit further from the town than expected, but the views made up for it."
  },
  {
    id: 7,
    house_id: houses[5].id,
    author: users[0],
    date: '23 Jul 2024',
    rating: 4.9,
    content:
      "This ski chalet in Aspen was incredible! So close to the slopes and the luxury of the house made our ski trip unforgettable. Michael was a fantastic host, always available when needed. The chalet's cozy atmosphere and modern amenities were a perfect combination."
  },
  {
    id: 8,
    house_id: houses[4].id,
    author: users[1],
    date: '15 Aug 2024',
    rating: 4.6,
    content:
      "The beachfront villa in Cape Town exceeded our expectations. The panoramic views of the ocean were stunning. Sarah made sure we had everything we needed. The house was spacious and elegantly decorated. A great choice for a family vacation!"
  },
  {
    id: 9,
    house_id: houses[3].id,
    author: users[2],
    date: '5 Sep 2024',
    rating: 4.3,
    content:
      "Loved the Parisian charm of Jean’s apartment. The location was perfect for exploring the city. The apartment itself was cozy and well-appointed, although a bit smaller than expected. A lovely stay overall."
  },
  {
    id: 10,
    house_id: houses[3].id,
    author: users[3],
    date: '12 Oct 2024',
    rating: 5,
    content:
      "Emily's house in Sydney was a dream! The private pool and garden were amazing for relaxing. The house was beautifully furnished and very comfortable. Great location, close to beaches and restaurants. Highly recommend!"
  },
  {
    id: 11,
    house_id: houses[5].id,
    author: users[4],
    date: '30 Oct 2024',
    rating: 4.4,
    content:
      "Staying in Tuscany at Luca's rustic farmhouse was a unique experience. The vineyard surroundings were peaceful and beautiful. The house had a charming, rustic feel and was quite spacious. A bit remote, but perfect for a quiet getaway."
  }
]

// Bookings Dummy Data

export const bookings = [
    {
      booking_id: 1,
      price: 69,
      arrival: '2 Jan 2024',
      departure: '19 Jan 2024',
      house: houses[0],
      host: users[0],
      guest: users[1]
      
    },
  {
    booking_id: 2,
    price: 850,
    arrival: '5 Feb 2024',
    departure: '12 Feb 2024',
    house: houses[1],
    host: users[1],
    guest: users[2]
  },
  {
    booking_id: 3,
    price: 950,
    arrival: '15 Mar 2024',
    departure: '22 Mar 2024',
    house: houses[2],
    host: users[2],
    guest: users[3]
  },
  {
    booking_id: 4,
    price: 600,
    arrival: '1 Apr 2024',
    departure: '8 Apr 2024',
    house: houses[3],
    host: users[3],
    guest: users[4]
  },
  {
    booking_id: 5,
    price: 800,
    arrival: '10 May 2024',
    departure: '17 May 2024',
    house: houses[4],
    host: users[4],
    guest: users[5]
  },
  {
    booking_id: 6,
    price: 1200,
    arrival: '20 Jun 2024',
    departure: '27 Jun 2024',
    house: houses[5],
    host: users[5],
    guest: users[0]
  },
  {
    booking_id: 7,
    price: 900,
    arrival: '5 Jul 2024',
    departure: '12 Jul 2024',
    house: houses[4],
    host: users[5],
    guest: users[1]
  },
  {
    booking_id: 8,
    price: 750,
    arrival: '15 Aug 2024',
    departure: '22 Aug 2024',
    house: houses[4],
    host: users[5],
    guest: users[2]
  },
  {
    booking_id: 9,
    price: 1100,
    arrival: '1 Sep 2024',
    departure: '8 Sep 2024',
    house: houses[4],
    host: users[4],
    guest: users[3]
  },
  {
    booking_id: 10,
    price: 850,
    arrival: '10 Oct 2024',
    departure: '17 Oct 2024',
    house: houses[3],
    host: users[2],
    guest: users[4]
  }
];

