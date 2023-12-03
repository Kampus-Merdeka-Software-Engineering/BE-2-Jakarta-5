const express = require("express");
const router = express.Router();
const newsController = require("../controller/newsController");

router.get("/get", newsController.getAllNews);
router.post("/create", newsController.createNews);
router.get("/get/:id", newsController.getNewsById);
router.put("/update/:id", newsController.updateNews);
router.delete("/get/:id", newsController.deleteNews);

module.exports = router;
