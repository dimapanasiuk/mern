const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const mongoose = require("mongoose");
const connectEnsureLogin = require("connect-ensure-login");

const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const User = require("../scheme");
const Currency = require("../scheme");

const db = require("../db");

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

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => { // ask this
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

router.get("/", (req, res) => {

  console.log('user ++++++++++++++++++++++++', req.user) // i cant get user id

  // const cur = new Currency({
  //   link: mongoose.Types.ObjectId("5fce86d5b5399c22dc268eab"),
  //   basicCurrency: 'usd',
  // });

  // cur.save((e) => {
  //   if (e) return console.error("=====💡🛑=====", e);
  // });

  res.send('<h1>Hello world</h1>');
});


router.get("/home", (req, res) => { // try/catch at each endpoint
  res.send({ user: req.user });
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/home");
  }
);

router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/home");
});

router.get("/profile", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send({ user: req.user });
});

router.post("/registration", (req, res) => {
  const { userName, password, password2 } = req.body;

  if (password === password2 && password.length > 4) {
    const user = new User({
      name: userName,
      password: password,
    });

    user.save((e) => {
      if (e) return console.error("=====💡🛑=====", e);
    });

    res.send({ data: "work" });
  }

  res.send({ data: "err" });
});

router.put("/save", (req, res) => {
  const { teams } = req.body;

  User.updateOne({ name: "dima" }, { nhlTeams: teams }, (e, result) => {
    if (e) return console.error("=====💡🛑=====", e);
  });

  res.send(req.body.teams);
});

router.post("/map", (req, res) => { //?
  const { placeId, API_KEY } = req.body;

  const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,formatted_phone_number&key=${API_KEY}`;

  axios // make with help async await
    .get(request)
    .then((data) => {
      res.send(data.data);
    })
    .catch((e) => console.error("=====💡🛑=====", e));
});

module.exports = router;
