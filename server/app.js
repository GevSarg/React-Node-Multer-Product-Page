const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const models = require("./models");

const ProductServices = require("./services/ProductServices");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Failed"));

app.locals.models = {
  products: models.products,
};

app.locals.services = {
  products: new ProductServices(app.locals.models),
};
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
