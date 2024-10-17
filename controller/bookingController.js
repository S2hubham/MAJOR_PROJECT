const Booking = require('../models/booking');
const Listing = require('../models/listing');

// Render Booking Form
module.exports.renderBookingForm = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            req.flash("error", "Listing not found.");
            return res.redirect("/listings");
        }
        res.render('booking/new.ejs', { listing });
    } catch (error) {
        console.error(error);
        req.flash("error", "Error retrieving listing.");
        res.redirect("/listings");
    }
};

// Create Booking
module.exports.createBooking = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            req.flash("error", "Listing not found.");
            return res.redirect("/listings");
        }

        const { checkInDate, checkOutDate, paymentMethod } = req.body;

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        if (checkIn >= checkOut) {
            req.flash("error", "Check-out date must be after check-in date.");
            return res.redirect(`/booking/${listing._id}/new`);
        }

        const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
        const totalPrice = listing.price * days;

        const booking = new Booking({
            user: req.user._id,
            listing: listing._id,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            totalPrice: totalPrice,
            paymentMethod: paymentMethod,
        });

        await booking.save();
        req.flash("success", "Booking created successfully!");
        res.redirect(`/booking/${booking._id}/confirm`);
    } catch (error) {
        console.error(error);
        req.flash("error", "Error creating booking.");
        res.redirect("/listings");
    }
};

// Confirm Booking
module.exports.confirm = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('listing');
        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/bookings");
        }
        const listing = booking.listing;
        res.render('booking/confirm.ejs', { listing, booking }); 
    } catch (error) {
        console.error(error);
        req.flash("error", "Error retrieving booking.");
        res.redirect("/bookings");
    }
};

// Confirm Booking
module.exports.confirmBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/bookings");
        }

        if (booking.status === 'Confirmed') {
            req.flash("error", "This booking has already been confirmed.");
            return res.redirect(`/booking/${booking._id}/details`);
        }

        booking.status = 'Confirmed';
        booking.confirmationDate = new Date();
        await booking.save();

        req.flash("success", "Booking confirmed successfully!");
        res.redirect(`/booking/details`);
    } catch (error) {
        console.error(error);
        if (error.name === 'CastError') {
            req.flash("error", "Invalid booking ID.");
            return res.redirect("/bookings");
        }
        req.flash("error", "Error confirming booking.");
        res.redirect("/bookings");
    }
};

// Show Booking Details
module.exports.showBookingDetails = async (req, res) => {
    try {
        const booking = await Booking.find().populate('listing');
        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/bookings");
        }
        res.render('booking/details.ejs', { booking });
    } catch (error) {
        console.error(error);
        req.flash("error", "Error retrieving booking.");
        res.redirect("/bookings");
    }
};

// Delete Booking
module.exports.deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/bookings");
        }
        req.flash("success", "Booking deleted successfully!");
        res.redirect('/booking/details'); 
    } catch (error) {
        console.error(error);
        req.flash("error", "Error deleting booking.");
        res.redirect("/bookings");
    }
};
