const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const debug = require("debug")("app");

const app = express();
const PORT = 3000;

// Middleware
app.use(
  cors({
    origin: ["https://theophile-picolet.github.io", "http://localhost:3000"],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Database connection
sequelize
  .sync()
  .then(() => {
    debug("Database connected successfully.");
    app.listen(PORT, () => {
      debug(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    debug("Unable to connect to the database:", err);
    console.error("Unable to connect to the database:", err);
  });
