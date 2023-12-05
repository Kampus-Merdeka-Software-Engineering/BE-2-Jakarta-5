const { destiantion_package_detail } = require("../models");

exports.getAlldestiantion_package_detail = async (req, res) => {
  try {
    const alldestiantion_package_detail = await destiantion_package_detail.findAll();
    return res.json(alldestiantion_package_detail);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createdestiantion_package_detail = async (req, res) => {
  try {
    const { destination_name, destination_package_review, package_price, image_url } = req.body;
    const newdestiantion_package_detail = await destiantion_package_detail.create({
      destination_name,
      destination_package_review,
      package_price,
      image_url,
    });
    res.status(201).json(newdestiantion_package_detail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getdestiantion_package_detailById = async (req, res) => {
  try {
    const byIddestiantion_package_detail = await destiantion_package_detail.findByPk(req.params.id);
    if (byIddestiantion_package_detail) {
      return res.json(byIddestiantion_package_detail);
    } else {
      return res.status(404).json({ message: "user messange not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deletedestiantion_package_detail = async (req, res) => {
  try {
    const deletedRowCount = await destiantion_package_detail.destroy({ where: { id: req.params.id } });
    if (deletedRowCount) {
      return res.json({ message: "user messange deleted successfully" });
    } else {
      res.status(404).json({ message: "messange not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
