const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const PORT = config.get("port") || 5000;

const User = require("./scheme/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/api/hello", (req, res) => {
  User.find({}, function (err, users) {
    mongoose.disconnect();

    if (err) return console.log(err);

    // console.log("my users", users);
    res.send({ express: users });
  });
});

app.post("/api/remove", (req, res) => {
  User.remove({ _id: req.body.id }, function (err, result) {
    mongoose.disconnect();

    if (err) return console.log("remove error", err);

    console.log("result for delete", result);
  });

  console.log("after delete ", req.body.id);
});

app.post("/api/world", (req, res) => {
  const user = new User({
    name: req.body.post,
  });

  user.save(function (err) {
    mongoose.disconnect(); // отключение от базы данных

    if (err) return console.log("saveverrror", err);
    console.log("Сохранен объект", user);
  });

  console.log("after save", req.body.post);

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
