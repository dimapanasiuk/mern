const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const PORT = config.get("port") || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const connectEnsureLogin = require("connect-ensure-login");
const session = require("express-session");
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

app.use(cors());

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
  cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

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

app.use(passport.initialize());
app.use(passport.session());

app.get("/home", function (req, res) {
  res.send({ user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/home");
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/home");
});

app.get("/profile", connectEnsureLogin.ensureLoggedIn(), function (req, res) {
  res.send({ user: req.user });
});

app.post("/registration", (req, res) => {
  const { password, password2 } = req.body;

  if (password === password2 && password.length > 4) {
    const user = new User({
      name: req.body.userName,
      password: req.body.password,
    });

    user.save(function (err) {
      if (err) return console.log(err);
      console.log("Saved object", user);
    });

    res.send({ data: "work" });
  }

  res.send({ data: "err" });
});

app.put("/save", (req, res) => {
  const { teams } = req.body;

  User.updateOne({ name: "dima" }, { nhlTeams: teams }, function (err, result) {
    if (err) return console.log(err);
  });

  res.send(req.body.teams);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
