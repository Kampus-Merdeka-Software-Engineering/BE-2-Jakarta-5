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
    const { start_time, end_time, activity, activity_place, destination_package_id } = req.body;
    const data = await destiantion_package_detail.create({
      start_time,
      end_time,
      activity,
      activity_place,
      destination_package_id,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getdestiantion_package_detailById = async (req, res) => {
  try {
    const { destination_package_id } = req.params;
    const details = await destiantion_package_detail.findAll({
      where: { destination_package_id: destination_package_id },
    });
    if (details.length > 0) {
      return res.json(details);
    } else {
      return res.status(404).json({ message: "No destination_package_detail found for the specified destination_package_id" });
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
