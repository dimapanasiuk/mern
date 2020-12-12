const express = require('express');
const router = express.Router();
const axios = require("axios").default;
// const mongoose = require("mongoose");
const connectEnsureLogin = require("connect-ensure-login");
// const findOrCreate = require('mongoose-findorcreate');

const _ = require('lodash');

const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const User = require("../scheme");
const Currency = require("../scheme");
const Cur = require("../scheme");

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

  const { _id } = req.user;

  const cur = new Currency({
    link: _id,
    basicCurrency: 'usd',
  });

  cur.save((e) => {
    if (e) return console.error("=====💡🛑=====", e);
  });

  res.send('<h1>Hello world</h1>');
});


router.get("/home", (req, res) => { // at each endpoint
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
      if (e) return res.send({ data: "error" }); // [TODO: check does func go to next / because we have return ]
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

router.put("/currency", async (req, res) => {
  const { _id } = req.user;
  const { currencyData: { basicCur, selectCurrencies, startDate, endDate } } = req.body;

  const data = {
    _id: _id,
    basicCurrency: basicCur,
    currencies: selectCurrencies,
    dateStart: startDate,
    dateEnd: endDate,
  };

  await Currency.findOrCreate({ _id: _id }, data, (err, value) => {
    const isTrue = _.isEqual(data._id, value._id)
      && _.isEqual(data.basicCurrency, value.basicCurrency)
      && _.isEqual(data.currencies, value.currencies)
      && _.isEqual(data.dateStart, value.dateStart)
      && _.isEqual(data.dateEnd, value.dateEnd);
    // && _.isEqual(data, value); why doesn't it work

    if (!isTrue) {

      Currency.findByIdAndUpdate({ _id }, data, (err, result) => {
        if (err) console.error("=====💡🛑===== /currency Currency.findByIdAndUpdate error", e);
        res.send({ currency: result });
      });
    }

    if (err) console.log('WTF', err);
    res.send({ currency: result });
  });
});

router.post("/map", async (req, res) => { //?
  const { placeId, API_KEY } = req.body;

  const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,formatted_phone_number&key=${API_KEY}`;
  try {
    const resp = await axios.get(request);
    res.send(resp.data);
  } catch (e) {
    console.error("=====💡🛑===== /map endpoint error", e);
  }
});

module.exports = router;
