const router = require("express").Router();
const animalsController = require("../../../controllers/animalsController");

router
  .route("/")
  .get(animalsController.findAll)
  .post(animalsController.create);

router
  .route("/:id")
  .get(animalsController.findById)
  .put(animalsController.update)
  .delete(animalsController.remove);


module.exports = router;