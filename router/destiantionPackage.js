const express = require("express");
const router = express.Router();
const destinationPackage = require("../controller/destinationPackageController");

router.get("/get", destinationPackage.getAlldestiantion_package_detail);
// router.post("/create", FAQController.createMessange);
// router.get("/get/:id", FAQController.getMessangeById);
// router.delete("/get/:id", FAQController.deleteMessange);

module.exports = router;
