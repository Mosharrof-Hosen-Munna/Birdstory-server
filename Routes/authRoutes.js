const router = require("express").Router();
const {
  createUserController,
  userGetController,
} = require("../Controllers/authControllers");

router.get("/user/:email", userGetController);
router.post("/user/create", createUserController);

module.exports = router;
