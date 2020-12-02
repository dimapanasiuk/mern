const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const PORT = config.get("port") || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");

const routing = require('./routing');


async function start() {
  const url = config.get("mongoUri");
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("db connect");
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
}

start();

app.use(cors());
app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', routing);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
