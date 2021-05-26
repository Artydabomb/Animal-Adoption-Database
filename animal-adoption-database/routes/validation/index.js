const router = require("express").Router();
const userRoutes = require("./register.js");

// user routes
router.route("/")

router.use("/register.js", userRoutes);

module.exports = router;