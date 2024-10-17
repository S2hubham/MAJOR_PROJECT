const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "beachfront",
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "iconicCities",
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "mountains",
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "castles",
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "camping",
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "beachfront",
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "camping",
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "iconicCities",
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "mountains",
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "arctic",
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "iconicCities",
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            },
        ],
        category: "beachfront",
        price: 5000,
        location: "Bora Bora",
        country: "French Polynesia",
    },

    {
        title: "Charming Lakehouse",
        description:
            "A cozy lakeside retreat with stunning views and modern amenities.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://plus.unsplash.com/premium_photo-1661895782970-fb227f6232e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZWhvdXNlfGVufDB8fDB8fHww",
                filename: "/images/lakehouse.jpg",
            },
        ],
        price: 150,
        location: "Lake Tahoe, CA",
        country: "USA",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94671", // Replace with actual ObjectId of a user
        category: "trending",
    },
    {
        title: "Elegant City Loft",
        description:
            "A stylish loft in the heart of downtown with easy access to major attractions.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
                filename: "/images/city-loft.jpg",
            },
        ],
        price: 200,
        location: "New York City, NY",
        country: "USA",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94672", // Replace with actual ObjectId of a user
        category: "iconicCities",
    },
    {
        title: "Mountain Retreat Cabin",
        description:
            "A rustic cabin surrounded by breathtaking mountain scenery.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
                filename: "/images/mountain-cabin.jpg",
            },
        ],
        price: 120,
        location: "Aspen, CO",
        country: "USA",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94673", // Replace with actual ObjectId of a user
        category: "mountains",
    },
    {
        title: "Historic Castle Stay",
        description:
            "Experience the charm of staying in a historic castle with all modern comforts.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
                filename: "/images/castle.jpg",
            },
        ],
        price: 500,
        location: "Scotland, UK",
        country: "UK",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94674", // Replace with actual ObjectId of a user
        category: "castles",
    },
    {
        title: "Tropical Beachfront Villa",
        description:
            "A luxurious villa right on the beach, perfect for a tropical getaway.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
                filename: "/images/beach-villa.jpg",
            },
        ],
        price: 350,
        location: "Bali, Indonesia",
        country: "Indonesia",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94675", // Replace with actual ObjectId of a user
        category: "amazingPools",
    },
    {
        title: "Unique Dome Home",
        description:
            "Stay in a futuristic dome home with panoramic views of the desert landscape.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
                filename: "/images/dome-home.jpg",
            },
        ],
        price: 180,
        location: "Joshua Tree, CA",
        country: "USA",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94676", // Replace with actual ObjectId of a user
        category: "domes",
    },
    {
        title: "Quaint Farmhouse",
        description:
            "A charming farmhouse experience with fresh air and beautiful countryside views.",
        deletedImages: [{ url: "", filename: "" }],
        images: [
            {
                url: "https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww",
                filename: "/images/farmhouse.jpg",
            },
        ],
        price: 130,
        location: "Lancaster, PA",
        country: "USA",
        reviews: [], // Assuming no reviews yet
        owner: "64b6d9f5c8f8c5b5bba94677", // Replace with actual ObjectId of a user
        category: "farms",
    },
];

module.exports = { data: sampleListings };
