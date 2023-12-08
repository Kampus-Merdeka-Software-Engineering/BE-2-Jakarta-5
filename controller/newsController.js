const { news } = require("../models");
const multer = require("multer");
const path = require("path");

exports.getAllNews = async (req, res) => {
  try {
    const allNews = await news.findAll();
    return res.json(allNews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../assets/image");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

exports.createNews = async (req, res) => {
  try {
    const { title, body, news_url } = req.body;

    upload.single("image_url")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading file" });
      }
      const newNews = await news.create({ title, body, news_url, image_url: req.file.path });
      res.status(201).json(newNews);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.createNews = async (req, res) => {
//   try {
//     const { title, body, news_url, image_url } = req.body;
//     console.log(title);
//     const newNews = await news.create({ title, body, news_url, image_url });
//     return res.status(201).json(newNews);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

exports.getNewsById = async (req, res) => {
  try {
    const byIdnews = await news.findByPk(req.params.id);
    if (byIdnews) {
      res.json(byIdnews);
    } else {
      return res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const { title, body, news_url } = req.body;
    const updatedNews = await news.update({ title, body, news_url }, { where: { id: req.params.id } });
    if (updatedNews[0]) {
      return res.json({ message: "News updated successfully" });
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const deletedRowCount = await news.destroy({ where: { id: req.params.id } });
    if (deletedRowCount) {
      return res.json({ message: "News deleted successfully" });
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
