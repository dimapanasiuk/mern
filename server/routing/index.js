const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const connectEnsureLogin = require("connect-ensure-login");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const {checkId} = require("../middlewares");

const { User, Currency, Nhl, Map } = require("../scheme");
const db = require("../db");

const salt = bcrypt.genSaltSync(10);

passport.use(
  new Strategy(function (username, password, cb) {
  // console.log("username", username);
  // console.log("password", password);
    
    db.users.findByUsername(username, (err, user) => {
      console.log("result", bcrypt.compareSync(password, user.password));
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
  // req.socket.setTimeout(500*1000); // = 5 min because default endpoint timeout has 2min
  try {
  // throw new Error("error home endpoint"); for check catch
    res.send({ user: req.user }); 
  } catch(e) {
    console.log("error endpoint get /home");
    res.status(500).send(e.message);
  }
});

router.post("/login",
  passport.authenticate("local", { failureRedirect: "/login" }),(req, res) => {
    res.redirect("/home");
  }
);

router.post("/logout", (req, res) => {
  try {
    req.logout();
    res.redirect("/home");
  } catch(e) {
    console.log("error endpoint post( /logout");
    res.status(500).send(e.message);
  }
});

router.get("/profile", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  try {
    res.send({ user: req.user });
  } catch(e) {
    console.log("error endpoint get /profile");
    res.status(500).send(e.message);
  }
});

router.post("/registration", (req, res) => {
  try {
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
  } catch(e) {
    console.log("error endpoint post /registration");
    res.status(500).send(e.message);
  }
});

router.put("/save", (req, res) => {
  try {
    const { teams } = req.body;

    User.updateOne({ name: "dima" }, { nhlTeams: teams });  //// [TODO: fix this Dima ]
    res.send(req.body.teams);
  } catch(e) {
    console.log("error endpoint put /save");
    res.status(500).send(e.message);
  }
});

router.put("/currency", async (req, res) => { //[TODO: check this endpoint]
  try {
    const { _id } = req.user;
    const { currencyData: { basicCur, selectCurrencies, startDate, endDate } } = req.body;
  
    const data = {
      link: _id,
      basicCurrency: basicCur,
      currencies: selectCurrencies,
      dateStart: startDate,
      dateEnd: endDate,
    };
  
    const currency =  await Currency.findOrCreate({ link: _id }, data );
    const isTrue = _.isEqual(data.link, currency.link)
        && _.isEqual(data.basicCurrency, currency.basicCurrency)
        && _.isEqual(data.currencies, currency.currencies)
        && _.isEqual(data.dateStart, currency.dateStart)
        && _.isEqual(data.dateEnd, currency.dateEnd);
  
    if (!isTrue) { 
      const cur = await Currency.updateOne({ link: _id }, { $set: data });  // [TODO: we have error  Cannot set headers after they are sent to the client ]
      await res.send({ currency: result });
    }
  
    res.send({ currency: value });
  } catch(e) {
    console.log("error endpoint put /currency");
    res.status(500).send(e.message);
  }
});

router.put("/nhlteams", async (req, res) => {
  try {
    const { _id } = req.user;
    const { teams } = req.body;
    const data = { teams, link: _id };

    const founded = await Nhl.findOrCreate({ link: _id }, data);

    const isTrue = _.isEqual(teams, founded.teams) && _.isEqual(data.link, founded.link); //[TODO: check this moment  founded.link may be has another type data]

    if (!isTrue) {
      const nhl = await Nhl.findOneAndUpdate({ link: _id }, { $set: { teams } }, (err, result) => {
        if (err) console.error("=====💡🛑===== /currency Currency.findByIdAndUpdate error", e);
        res.send({ nhl: result });
      });
      await nhl.save();
    }

    if (err) console.error("=====💡🛑===== /nhlteams put endpoint error", err);

    res.send({ nhl: founded });
  } catch(e) {
    console.log("error endpoint put nhlteams");
    res.status(500).send(e.message);
  }
});

router.put("/saveMap", async (req, res) => {
  try {
    const { _id } = req.user;
    const { mapData } = req.body;
  
    const maps = await Map.findOrCreate({ link: _id }, { places: mapData });
  
    const isEqual = _.isEqual([mapData], maps.doc.places);
  
    if (!isEqual) {
      const map = await Map.updateOne({ link: _id }, { $push: { places: mapData } }); 
      return res.send({ mapData1: map });
    }
    res.send({ mapData2: maps }); 
  } catch(e) {
    console.log("error endpoint get /saveMap");
    res.status(500).send(e.message);
  }
});

router.post("/map", async (req, res) => {
  try {
    const { placeId, API_KEY } = req.body;
    const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,formatted_phone_number&key=${API_KEY}`;
   
    const resp = await axios.get(request);
    res.send(resp.data);
  } catch (e) {
    console.log("error endpoint post /map");
    res.status(500).send(e.message);
  
  }
});

router.get("/currency", async (req, res) => {
  try {
    const { _id } = req.user;

    if (_id) {
      const answer = await Currency.findOne({ link: _id });
      res.send({ currency: answer || "error" });
    }
  } catch(e) {
    console.log("error endpoint get /currency");
    res.status(500).send(e.message);
  }
});

router.get("/nhl", async (req, res) => {
  try {
    const { _id } = req.user;

    if (_id) {
      const answer = await Nhl.findOne({ link: _id }, async (err, response) => {
        if (err) console.error("=====💡🛑===== /nhl get endpoint error", err);
        return response;
      });

      res.send({ nhl: answer || "error" });
    } 
  } catch(e) {
    console.log("error endpoint get /nhl");
    res.status(500).send(e.message);
  }
});

router.patch("/updateDesc", async (req, res) => {
  try {
    const { _id } = req.user;

    const placesUpd = (places, values) => {
      return places.map(place => {
        const conditional = place.desc === values.oldValue && place.label === values.place;
        return conditional ? { ...place, desc: values.newValue } : place;
      }
      );
    };

    if (_id) {
      const { place, oldValue, newValue } = req.body.mapInfo;

      const linkId = { link: _id };

      const mapFind = await Map.findOne(linkId);
      const places = placesUpd(mapFind.places, { place, oldValue, newValue });
      const mapUpdate = await Map.updateOne(linkId, { places });
      res.send({ mapUpdate: mapUpdate });
    } 
  } catch(e) {
    console.log("error endpoint get /updateDesc");
    res.status(500).send(e.message);
  }
});

router.get("/mapData", checkId,  async (req, res) => {
  try {
    const answer = await Map.findOne({ link: _id });
    res.send({ mapData: answer});
  } catch(e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
