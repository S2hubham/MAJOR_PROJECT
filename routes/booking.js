const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const bookingController = require('../controller/bookingController');

// Show booking form
router.get('/listings/:id/book', bookingController.renderBookingForm);

// Create a new booking
router.post('/listings/:id/book', isLoggedIn, bookingController.createBooking);

// Show booking confirmation
router.get('/booking/:id/confirm', isLoggedIn, bookingController.confirm);
router.get('/booking/:id/confirmation', isLoggedIn, bookingController.confirmBooking);

// Route to show booking details
router.get('/booking/details', isLoggedIn, bookingController.showBookingDetails);

// Route to update booking
router.post('/booking/:id/delete', isLoggedIn, bookingController.deleteBooking);

module.exports = router;
