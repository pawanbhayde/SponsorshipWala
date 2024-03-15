const { signup, login} = require("../Controllers/usersController");
const router = require("express").Router();

router.post("/sign-up", signup);
router.post("/login", login);

module.exports = router;