const { order } = require("../models");

exports.getAllOrder = async (req, res) => {
  try {
    const allOrder = await order.findAll();
    res.json(allOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { user_id, destination_package_id, nik, username, useraddress, order_date, total_person, total_price } = req.body;
    const newOrder = await order.create({
      user_id,
      destination_package_id,
      nik,
      username,
      useraddress,
      order_date,
      total_person,
      total_price,
    });
    res.status(201).json(newOrder);
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

// exports.deleteMessange = async (req, res) => {
//   try {
//     const deletedMessange = await faq_messange.destroy({ where: { id: req.params.id } });
//     if (deletedRowCount) {
//       res.json({ message: "user messange deleted successfully" });
//     } else {
//       res.status(404).json({ message: "messange not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
