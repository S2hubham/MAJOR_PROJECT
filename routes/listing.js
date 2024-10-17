const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index route and create route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.array('images', 10), validateListing, wrapAsync(listingController.createListing));

// New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Search and filter routes
router.get("/search", listingController.searchListing);
router.get("/filter", listingController.filteredListing);

// Show, update, and delete routes
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.array('images', 10), wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
