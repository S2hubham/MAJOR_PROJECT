const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

// Define schema
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "No description provided",
    },
    images: [{
        url: {
            type: String, 
            required: true
        },
        filename: {
            type: String,
            required: true
        }
    }],
    deletedImages: [{
        url: {
            type: String,
        },
        filename: {
            type: String,
        }
    }],
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        enum: ["trending", "beachfront", "rooms", "iconicCities", "mountains", "castles", "amazingPools", "camping", "farms", "arctic", "domes", "boats"],
        required: true,
    }
});


// Hook to delete related reviews
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        try {
            await Review.deleteMany({ _id: { $in: listing.reviews } });
        } catch (error) {
            console.error("Error deleting reviews:", error);
        }
    }
});

// Create model
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
