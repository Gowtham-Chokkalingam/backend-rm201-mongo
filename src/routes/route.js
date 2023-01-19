const express = require("express");
const { userSignup, userSigin } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userSigin);

module.exports = router;
