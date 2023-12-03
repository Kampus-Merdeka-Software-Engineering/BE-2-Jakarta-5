const { news } = require("../models");

// get all data
exports.getAllNews = async (req, res) => {
  try {
    const allNews = await news.findAll();
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Membuat berita baru
exports.createNews = async (req, res) => {
  try {
    const { title, body, news_url } = req.body;
    const newNews = await news.create({ title, body, news_url });
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menampilkan berita berdasarkan ID
exports.getNewsById = async (req, res) => {
  try {
    const byIdnews = await news.findByPk(req.params.id);
    if (byIdnews) {
      res.json(byIdnews);
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Memperbarui berita berdasarkan ID
exports.updateNews = async (req, res) => {
  try {
    const { title, body, news_url } = req.body;
    const updatedNews = await news.update({ title, body, news_url }, { where: { id: req.params.id } });
    if (updatedNews[0]) {
      res.json({ message: "News updated successfully" });
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menghapus berita berdasarkan ID
exports.deleteNews = async (req, res) => {
  try {
    const deletedRowCount = await news.destroy({ where: { id: req.params.id } });
    if (deletedRowCount) {
      res.json({ message: "News deleted successfully" });
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
