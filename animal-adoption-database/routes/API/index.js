const router = require("express").Router();
const userRoutes = require("./user.js");

// Book routes
router.use("/user.js", userRoutes);

module.exports = router;