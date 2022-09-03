const express = require("express");
const { protect, restrictTo } = require("../controller/authController");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getTourWithIn,
  getDistances,
} = require("../controller/tourController");
const reviewRouter = require("./reviewRoute");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-3-tours").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router
  .route("/monthly-plan/:year")
  .get(protect, restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);

router
  .route("/tours-within/:distance/center/:latlng/unit/:unit")
  .get(getTourWithIn);

router.route("/distances/:latlng/unit/:unit").get(getDistances);
router
  .route("/")
  .get(getAllTours)
  .post(protect, restrictTo("admin", "lead-guide"), createTour);
router
  .route("/:Id")
  .get(getTour)
  .patch(protect, restrictTo("admin", "lead-guide"), updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);
module.exports = router;
