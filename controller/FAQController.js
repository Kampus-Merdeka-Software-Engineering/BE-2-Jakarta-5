const { faq_messange } = require("../models");

exports.getAllMessange = async (req, res) => {
  try {
    const allmessange = await faq_messange.findAll();
    res.json(allmessange);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMessange = async (req, res) => {
  try {
    const { users_id, username, email, user_messange } = req.body;
    const newMessange = await faq_messange.create({ users_id, username, email, user_messange });
    res.status(201).json(newMessange);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMessangeById = async (req, res) => {
  try {
    const byIdMessange = await faq_messange.findByPk(req.params.id);
    if (byIdMessange) {
      res.json(byIdMessange);
    } else {
      res.status(404).json({ message: "user messange not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMessange = async (req, res) => {
  try {
    const deletedMessange = await faq_messange.destroy({ where: { id: req.params.id } });
    if (deletedRowCount) {
      res.json({ message: "user messange deleted successfully" });
    } else {
      res.status(404).json({ message: "messange not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
