const express = require("express");
// const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/db.config");
const app = express();
require("dotenv").config();

// Menggunakan JSON body parser
app.use(express.json());

//routes
// app.use("/api", userRoutes);

const PORT = process.env.PORT;
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running cuy");
      console.log(PORT);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
