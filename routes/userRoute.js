const express = require("express");

const {
  resetPassword,
  signUp,
  logIn,
  forgotPassword,
  protect,
  updatePassword,
  restrictTo,
  logout,
} = require("../controller/authController");
const {
  updateMe,
  deleteMe,
  deleteUser,
  updateUser,
  getUser,
  createUser,
  getAllUser,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
} = require("../controller/userController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/logout", logout);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

//Protect all route after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);
router.patch("/updateMe", uploadUserPhoto, resizeUserPhoto, updateMe);
router.get("/me", getMe, getUser);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin"));

router.route("/").get(getAllUser);
router.route("/:Id").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/AdminOnly").post(createUser);
module.exports = router;
