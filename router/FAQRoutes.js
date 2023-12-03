const express = require("express");
const router = express.Router();
const FAQController = require("../controller/FAQController");

router.get("/get", FAQController.getAllMessange);
router.post("/create", FAQController.createMessange);
router.get("/get/:id", FAQController.getMessangeById);
router.delete("/get/:id", FAQController.deleteMessange);

module.exports = router;
