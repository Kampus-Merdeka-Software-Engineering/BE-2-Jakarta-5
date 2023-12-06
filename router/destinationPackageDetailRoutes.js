const express = require("express");
const router = express.Router();
const destinationPackageDetail = require("../controller/destinationPackageDetailController");

router.get("/get", destinationPackageDetail.getAlldestiantion_package_detail);
router.post("/create", destinationPackageDetail.createdestiantion_package_detail);
router.get("/get/:destination_package_id", destinationPackageDetail.getdestiantion_package_detailById);
// router.delete("/get/:id", );

module.exports = router;
