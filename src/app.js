const express = require("express");
const app = express();
const appConfig = require("./config/app.config");

// import utilities
const cors = require("cors");

// import routes
const routes = require("./routes");

app.use(cors(appConfig.corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to artflow test backend." });
});

// main routes
app.use("/", routes);

// assets portrait
app.get("/portrait", (_, res) => {
  res.download(__dirname + "/assets/portrait.png");
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = app;
