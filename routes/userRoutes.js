// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/userController");

// Rute untuk membuat pengguna baru
router.post("/users", createUser);

module.exports = router;
