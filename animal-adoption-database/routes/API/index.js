const router = require("express").Router();
const userRoutes = require("./user.js");
const rescueGroupsRoutes = require("./rescuegroups.js")

// user routes
router.route("/")

//router.use("/user", userRoutes);
router.use("/rescuegroups", rescueGroupsRoutes)

module.exports = router;