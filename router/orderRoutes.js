const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.get("/get", orderController.getAllOrder);
router.post("/create", orderController.createOrder);

module.exports = router;
