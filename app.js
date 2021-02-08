const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// var cron = require("node-cron");
// const sendGridCredentials = require("./config/sendgrid");
// const sendgrid = require("@sendgrid/mail");
// sendgrid.setApiKey(sendGridCredentials.apiKey);
const passport = require("passport");
// var CronJob = require("cron").CronJob;
// const FIXER_API_KEY = process.env.FIXER_API_KEY;
// const axios = require("axios").default;

const database =
  process.env.MONGODB_URI ||
  "mongodb+srv://persing:persing2021@persing.nsfrd.mongodb.net/persing?retryWrites=true&w=majority";

// Connect to database
mongoose.connect(database, {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// On db connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + database);
});
// On db error
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

const app = express();
const port = process.env.PORT || 8081;

// CORS Middleware
app.use(cors());

// Force SSL
/* app.use(function (req, res, next) {
  if (!req.secure && req.get("X-Forwarded-Proto") !== "https") {
    res.redirect(307, "https://" + req.get("Host") + req.url);
  } else next();
}); */

// Set static folder
app.use(express.static(path.join(__dirname, "/public")));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Use API routes
var router = express.Router();
app.use("/api", router);
require("./routes/api/user")(router);
require("./routes/api/empresa")(router);
require("./routes/api/recompensa")(router);
require("./routes/api/publicacion")(router);
require("./routes/api/like")(router);
require("./routes/api/comentario")(router);
require("./routes/api/compartir")(router);
require("./routes/api/click")(router);
require("./routes/api/sector")(router);

// Import other routes and paths
const users = require("./routes/users");
// const pagos = require("./routes/pagos");
// const email = require("./routes/email");
// const credentials = require("./routes/credentials");
// app.use("/credentials", credentials);

app.use("/users", users);
// app.use("/pagos", pagos);
// app.use("/email", email);

// app.use("/users", users);
app.get("/", (req, res) => {
  res.send("<h1>Exito</h1>");
  console.log("entro");
});
app.get("***", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});


