const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const PORT = config.get("port") || 5000;

const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("./db");

const User = require("./scheme/user");

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

passport.use(
  new Strategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/home", function (req, res) {
  res.send({ user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log("post login", req.user);
    res.redirect("/home");
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/home");
});

app.get("/profile", require("connect-ensure-login").ensureLoggedIn(), function (
  req,
  res
) {
  res.send({ user: req.user });
});

app.post("/registration", (req, res) => {
  console.log("req.user", req.username);
  // const user = new User({
  //   name: req.body.post,
  // });

  // user.save(function (err) {
  //   if (err) return console.log(err);
  //   console.log("Сохранен объект", user);
  // });

  // res.send(
  //   `I received your POST request. This is what you sent me: ${req.body.post}`
  // );
});

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
