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


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


/*

app.get("/api/users", (req, res) => {
  User.find({}, function (err, docs) {
    if (err) return console.log(err);

    console.log("users", docs);
    res.send({ express: docs });
  });
});

app.delete("/api/remove", (req, res) => {
  User.remove({ _id: req.body.id }, function (err, result) {
    if (err) return console.log("remove error", err);

    console.log("result for delete", result);
  });
});

app.post("/api/create", (req, res) => {
  const user = new User({
    name: req.body.post,
  });

  user.save(function (err) {
    if (err) return console.log(err);
    console.log("Сохранен объект", user);
  });

  console.log("after save", req.body);

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.put("/api/update", (req, res) => {
  const { id, prevVal, newVal } = req.body;

  User.updateOne({ _id: id, name: prevVal }, { name: newVal }, function (
    err,
    result
  ) {
    if (err) return console.log(err);
    console.log("update result", result);
  });
});
*/