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

// exports.getOrderById = async (req, res) => {
//   try {
//     const {} =
//   } catch (error) {}
// };
