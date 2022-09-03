const express = require("express");
const { isLoggedIn, protect } = require("../controller/authController");
const { createBookingCheckout } = require("../controller/bookingController");
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
} = require("../controller/viewController");

const router = express.Router();

router.get("/", createBookingCheckout, isLoggedIn, getOverview);
router.get("/tour/:name", isLoggedIn, getTour);
router.get("/login", isLoggedIn, getLoginForm);
router.get("/me", protect, getAccount);
router.get("/my-tours", createBookingCheckout, protect, getMyTours);

router.post("/submit-user-data", protect, updateUserData);

module.exports = router;
