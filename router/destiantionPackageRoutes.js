const express = require("express");
const router = express.Router();
const destinationPackage = require("../controller/destinationPackageController");

router.get("/get", destinationPackage.getAlldestiantion_package);
router.get("/get/:id", destinationPackage.getdestiantion_packageByIdnoDetail);
router.get("/get/withDetail/:id", destinationPackage.getdestiantion_packageById);
router.post("/create", destinationPackage.createdestiantion_package);

module.exports = router;
