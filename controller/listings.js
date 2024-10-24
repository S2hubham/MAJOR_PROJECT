const Listing = require("../models/listing");
const { cloudinary } = require("../cloudConfig.js");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    // console.log(listing);
    if (!listing) {
        req.flash("error", "Listing doesn't exist");
        return res.redirect("/");
    }
    res.render("listings/show.ejs", { listing });
};


module.exports.createListing = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            req.flash("error", "Please upload at least one image.");
            return res.redirect("/new"); 
        }

        const newImages = await Promise.all(req.files.map(async (file) => {
            try {
                const { secure_url } = await cloudinary.uploader.upload(file.path); 
                return { url: secure_url, filename: file.filename };
            } catch (uploadError) {
                console.error("Cloudinary upload error:", uploadError);
                req.flash("error", "Error uploading image to Cloudinary.");
                throw uploadError; 
            }
        })); 

       
        const newListing = new Listing({
            ...req.body.listing,
            owner: req.user._id,
            images: newImages,
        });

        await newListing.save();

        req.flash("success", "New listing created");
        res.redirect("/");
    } catch (err) {
        console.error("Error creating listing:", err);
        req.flash("error", "An error occurred while creating the listing.");
        res.redirect("/new"); 
    }
};



module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing doesn't exist");
        return res.redirect("/");
    }
    res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/');
    }

    // Update listing with new data
    listing.set(req.body.listing);
    await listing.save();

    // Handle image deletion
    if (req.body.deleteImages && Array.isArray(req.body.deleteImages)) {
        for (let imageId of req.body.deleteImages) {
            const image = listing.images.find(img => img._id.equals(imageId));
            if (image) {
                // Optionally add to deletedImages before removing
                listing.deletedImages.push(image);
                await cloudinary.uploader.destroy(image.filename);
                listing.images.pull(imageId);
            }
        }
        await listing.save();
    }

    // Handle new image uploads
    if (req.files && req.files.length > 0) {
        const newImages = req.files.map(file => ({
            url: file.path,
            filename: file.filename
        }));
        listing.images.push(...newImages);
        await listing.save();
    }

    req.flash("success", "Listing edited successfully");
    res.redirect(`/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    res.redirect("/");
};

module.exports.searchListing = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.redirect("/");
        }

        const searchCriteria = {
            $or: [
                { title: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } },
            ],
        };

        let allListings = await Listing.find(searchCriteria);
        res.render("listings/index", { allListings });
    } catch (err) {
        console.error(err);
        res.redirect("/");
    }
};

module.exports.filteredListing = async (req, res) => {
    try {
        const category = req.query.category;

        const filterMap = {
            all: {},
            trending: { category: "trending" },
            rooms: { category: "rooms" },
            iconicCities: { category: "iconicCities" },
            mountains: { category: "mountains" },
            castles: { category: "castles" },
            amazingPools: { category: "amazingPools" },
            camping: { category: "camping" },
            farms: { category: "farms" },
            arctic: { category: "arctic" },
            domes: { category: "domes" },
            boats: { category: "boats" },
        };

        let listings;
        const query = filterMap[category] || {};

        if (category === "all") {
            listings = await Listing.find();
        } else {
            listings = await Listing.find(query);
        }

        res.json({ listings });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};
