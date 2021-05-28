const router = require("express").Router();
const animalsController = require("../../../controllers/animalsController");

// Matches with "/api/animals"
router
  .route("/")
  .get(animalsController.findAll)
  .post(animalsController.create);

// Matches with "/api/animals/:id"
router
  .route("/:id")
  .get(animalsController.findById)
  .put(animalsController.update)
  .delete(animalsController.remove);


module.exports = router;