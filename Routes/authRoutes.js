const { createUserController } = require("../Controllers/authControllers");

const router = require("express").Router();

router.post("/user/create", createUserController);

module.exports = router;
