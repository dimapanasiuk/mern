const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const connectEnsureLogin = require("connect-ensure-login");
const bcrypt = require('bcrypt');
const _ = require('lodash');

const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const { User, Currency, Nhl, Map } = require("../scheme");
const db = require("../db");

const salt = bcrypt.genSaltSync(10);

passport.use(
  new Strategy(function (username, password, cb) {
    console.log('username', username);
    console.log('password', password);

    db.users.findByUsername(username, (err, user) => {
      console.log('result', bcrypt.compareSync(password, user.password));

      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (bcrypt.compareSync(password, user.password)) {
        return cb(null, user);
      }
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

router.get("/home", (req, res) => {
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
  console.log(' req.session', req.session);
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
      password: bcrypt.hashSync(password, salt),
    });

    user.save((e) => {
      if (e) return res.send({ data: "error" }); // [TODO: check does func go to next / because we have return ]
    });

    res.send({ data: "work" });
  }
  // res.send({ data: "err" });
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
    link: _id,
    basicCurrency: basicCur,
    currencies: selectCurrencies,
    dateStart: startDate,
    dateEnd: endDate,
  };

  Currency.findOrCreate({ link: _id }, data, async (err, value) => {

    const isTrue = _.isEqual(data.link, value.link)
      && _.isEqual(data.basicCurrency, value.basicCurrency)
      && _.isEqual(data.currencies, value.currencies)
      && _.isEqual(data.dateStart, value.dateStart)
      && _.isEqual(data.dateEnd, value.dateEnd)

    if (!isTrue) {
      const cur = await Currency.findOneAndUpdate({ link: _id }, { $set: data }, (err, result) => {  // [TODO: we have error  Cannot set headers after they are sent to the client ]
        if (err) console.error("=====💡🛑===== /currency Currency.findByIdAndUpdate error", err);
        res.send({ currency: result });
      });
      await cur.save();
    }

    if (err) console.error("=====💡🛑===== /currency put endpoint error", err);

    res.send({ currency: value });
  })

});

router.put('/nhlteams', async (req, res) => {
  const { _id } = req.user;
  const { teams } = req.body;
  const data = { teams, link: _id };

  const founded = await Nhl.findOrCreate({ link: _id }, data);

  // console.log('data', _.omit(data, ['link'])); work successfully
  // console.log('value', _.omit(value, ['link']));  not work

  const isTrue = _.isEqual(data.teams, founded.teams) && _.isEqual(data.link, founded.link);

  if (!isTrue) {
    const nhl = await Nhl.findOneAndUpdate({ link: _id }, { $set: { teams } }, (err, result) => {
      if (err) console.error("=====💡🛑===== /currency Currency.findByIdAndUpdate error", e);
      res.send({ nhl: result });
    });
    await nhl.save();
  }

  if (err) console.error("=====💡🛑===== /nhlteams put endpoint error", err);

  res.send({ nhl: founded });
});

router.put('/saveMap', async (req, res) => {
  const { _id } = req.user;
  const { mapData } = req.body;

  const maps = await Map.findOrCreate({ link: _id }, { places: mapData });

  const isEqual = _.isEqual([mapData], maps.doc.places);

  if (!isEqual) {
    const map = await Map.findOneAndUpdate({ link: _id }, { $push: { places: mapData } }, (err, result) => {
      if (err) console.error("=====💡🛑===== /currency Currency.findByIdAndUpdate error", e);
      res.send({ mapData1: result });
    });
    await map.save();
  }

  res.send({ mapData2: maps });
});

router.post("/map", async (req, res) => {
  const { placeId, API_KEY } = req.body;

  const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,formatted_phone_number&key=${API_KEY}`;
  try {
    const resp = await axios.get(request);
    res.send(resp.data);
  } catch (e) {
    console.error("=====💡🛑===== /map endpoint error", e);
  }
});

router.get("/currency", async (req, res) => {
  const { _id } = req.user;

  if (_id) {
    const answer = await Currency.findOne({ link: _id }, async (err, response) => {
      if (err) console.error("=====💡🛑===== /currency get endpoint error", err);
      return response;
    })

    res.send({ currency: answer || 'error' });
  }
})

router.get("/nhl", async (req, res) => {
  const { _id } = req.user;

  if (_id) {
    const answer = await Nhl.findOne({ link: _id }, async (err, response) => {
      if (err) console.error("=====💡🛑===== /nhl get endpoint error", err);
      return response;
    })

    res.send({ nhl: answer || 'error' });
  }
})


router.patch("/updateDesc", async (req, res) => {
  const { _id } = req.user;
  if (_id) {
    const oldDesc = req.body.oldDesc;
    const newDesc = req.body.newDesc;
    const place = req.body.place;

    // https://docs.mongodb.com/manual/reference/operator/update/positional/

    const mapUpdate = Map.findOneAndUpdate({ link: _id }, { $set: { places } })
  }
});

router.get("/mapData", async (req, res) => {
  const { _id } = req.user;

  if (_id) {
    const answer = await Map.findOne({ link: _id }, async (err, response) => {
      if (err) console.error("=====💡🛑===== /mapData get endpoint error", err);
      return response;
    })
    res.send({ mapData: answer || 'error' });
  }
})

module.exports = router;
