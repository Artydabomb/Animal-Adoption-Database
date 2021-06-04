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
  .delete(animalsController.remove)
<<<<<<< HEAD
  .put(animalsController.updateArray);
=======
  .post(animalsController.updateArray);
>>>>>>> c61f1e1b5df88ef5cd55c03c898907ea0a40c262


module.exports = router;