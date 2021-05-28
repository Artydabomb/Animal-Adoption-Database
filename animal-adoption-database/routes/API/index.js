const router = require("express").Router();
const rescueGroupsRoutes = require("./rescuegroups")
// const userRoutes = require("./user.js");

//router.use("/user", userRoutes);
router.use("/rescuegroups", rescueGroupsRoutes)

// user routes
router.route("/")


module.exports = router;