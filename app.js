const express = require("express");
const newsRoutes = require("./router/newsRoutes");
const FAQRouter = require("./router/FAQRoutes");
const destinationDetail = require("./router/destinationPackageDetail");
const destinationPackage = require("./router/destiantionPackage");
const sequelize = require("./config/db.config");
const app = express();
require("dotenv").config();

app.use(express.json());

//routes
app.use("/news", newsRoutes);
app.use("/FAQ", FAQRouter);
app.use("/detinationDetail", destinationDetail);
app.use("/detinationPackage", destinationPackage);

const PORT = process.env.PORT;
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running cuy " + PORT);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.post;
