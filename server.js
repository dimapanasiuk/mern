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

app.get("/api/users", (req, res) => {
  // User.find({}, function (err, users) {
  //   mongoose.disconnect();

  //   if (err) return console.log(err);

  //   res.send({ express: users });
  // }); //work don't good

  res.send({ express: "users" });
});

app.delete("/api/remove", (req, res) => {
  console.log("after delete", req.body);

  User.remove({ name: "test" }, function (err, result) {
    mongoose.disconnect();

    if (err) return console.log("remove error", err);

    console.log("result for delete", result);
  });
});

app.post("/api/create", (req, res) => {
  const user = new User({
    name: req.body.post,
  });

  user.save(function (err) {
    mongoose.disconnect();

    if (err) return console.log(err);
    console.log("Сохранен объект", user);
  });
  console.log("after save", req.body);

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
