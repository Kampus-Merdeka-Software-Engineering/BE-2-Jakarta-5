const { destination_package, destiantion_package_detail } = require("../models");

exports.getAlldestiantion_package_detail = async (req, res) => {
  try {
    const alldestiantion_package = await destination_package.findAll({
      include: destiantion_package_detail,
    });
    return res.json(alldestiantion_package);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
