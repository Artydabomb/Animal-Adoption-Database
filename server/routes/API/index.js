const router = require("express").Router();
const rescueGroupsRoutes = require("./rescuegroups")
const userRoutes = require('./user');
const animalsRoutes = require('./animals')

router.use("/user", userRoutes);
router.use("/rescuegroups", rescueGroupsRoutes)
router.use("/animals", animalsRoutes)

// user routes
router.route("/")

module.exports = router;