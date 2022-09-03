const express = require("express");
const { protect, restrictTo } = require("../controller/authController");
const {
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getAllReviews,
  setTourUserIds,
} = require("../controller/reviewController");

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route("/")
  .get(getAllReviews)
  .post(restrictTo("user"), setTourUserIds, createReview);

router
  .route("/:Id")
  .get(getReview)
  .patch(restrictTo("admin", "user"), updateReview)
  .delete(restrictTo("admin", "user"), deleteReview);
module.exports = router;
