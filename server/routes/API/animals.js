const router = require("express").Router();
const animalsController = require("../../../controllers/animalsController");

router
  .route("/")
  .get(animalsController.findAll)
  .post(animalsController.create);

router
  .route("/:id")
  .get(animalsController.findById)
  .delete(animalsController.remove)
  .put(animalsController.updateArray);


module.exports = router;