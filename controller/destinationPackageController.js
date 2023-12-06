const { destination_package, destiantion_package_detail } = require("../models");

exports.getAlldestiantion_package = async (req, res) => {
  try {
    const alldestiantion_package = await destination_package.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.json(alldestiantion_package);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAlldestiantion_packageWithDetail = async (req, res) => {
  try {
    const alldestiantion_package = await destination_package.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: destiantion_package_detail,
          attributes: ["start_time", "end_time", "activity", "activity_place"],
        },
      ],
    });
    return res.json(alldestiantion_package);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getdestiantion_packageById = async (req, res) => {
  try {
    const destiantion_package_by_id = await destination_package.findByPk(req.params.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: destiantion_package_detail,
          attributes: ["start_time", "end_time", "activity", "activity_place"],
        },
      ],
    });
    return res.json(destiantion_package_by_id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getdestiantion_packageByIdnoDetail = async (req, res) => {
  try {
    const destiantion_package_by_id = await destination_package.findByPk(req.params.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.json(destiantion_package_by_id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createdestiantion_package = async (req, res) => {
  try {
    const { destination_name, destination_package_review, package_price, image_url } = req.body;
    const data = await destination_package.create({
      destination_name,
      destination_package_review,
      package_price,
      image_url,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
