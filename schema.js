const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().default("No description provided"),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        images: Joi.array().items(
            Joi.object({
                url: Joi.string().uri().required(),
                filename: Joi.string().required()
            })
        ).default([]), // Default to an empty array if not provided
        category: Joi.string().valid(
            "trending", "beachfront", "rooms", "iconicCities", "mountains",
            "castles", "amazingPools", "camping", "farms", "arctic", "domes", "boats"
        ).required(),
        deleteImages: Joi.array().items(Joi.string()).default([]) // Validate deleteImages as an array of strings
    }).required()
});


module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(1).max(5),
        comment : Joi.string().required()
    }).required()
}); 