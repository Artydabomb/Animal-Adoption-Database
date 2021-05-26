const router = require("express").Router();

router.route("/").post(function(req, res) {
    console.log(req)
})

module.exports = router;