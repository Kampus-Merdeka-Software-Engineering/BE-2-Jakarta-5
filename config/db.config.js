const { Sequelize } = require("sequelize");
require("dotenv").config();

// exports.db = new Sequelize("jalanin_dev", process.env.DB_USER, process.env.DB_PASS, {
//   host: "localhost",
//   dialect: "mysql",
// });

// const sequelize = new Sequelize("jalanin_dev", process.env.DB_USER, process.env.DB_PASS, {
//   host: "localhost",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("jalanin_dev", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// require("dotenv").config(); // Memuat variabel lingkungan dari .env ke process.env

// const path = require("path");
// const Sequelize = require("sequelize");

// // Ambil PATH dari .env
// const configPath = process.env.CONFIG_PATH || "./config.json";

// // Inisialisasi Sequelize dengan konfigurasi dari config.json
// const sequelize = new Sequelize({
//   dialect: "mysql",
//   storage: configPath, // Menggunakan path dari .env sebagai konfigurasi
//   define: {
//     timestamps: false, // Opsional: menonaktifkan timestamps secara global
//   },
// });

module.exports = sequelize;
