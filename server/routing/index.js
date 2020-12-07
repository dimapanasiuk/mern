const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const connectEnsureLogin = require("connect-ensure-login");

const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const User = require("../scheme/user");
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

passport.serializeUser(function (user, cb) {
	cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
	db.users.findById(id, function (err, user) { // ask this
		if (err) {
			return cb(err);
		}
		cb(null, user);
	});
});

router.get("/", (req, res) => {
	res.send("<h1>Test</h1>");
});

router.get("/home", function (req, res) { //to arrow function, try/catch at each endpoint
	res.send({ user: req.user });
});

router.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login" }),
	(req, res) => {
		res.redirect("/home");
	}
);

router.get("/logout", (req, res) => { // logout must be post
	req.logout();
	res.redirect("/home");
});

router.get("/profile", connectEnsureLogin.ensureLoggedIn(), function (req, res) {
	res.send({ user: req.user });
});

router.post("/registration", (req, res) => {
	const { userName, password, password2 } = req.body;

	console.log('userName', userName);
	console.log('password', password);


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

	User.updateOne({ name: "dima" }, { nhlTeams: teams }, function (e, result) {
		if (e) return console.error("=====💡🛑=====", e);
	});

	res.send(req.body.teams);
});

router.post("/map", (req, res) => { //?
	const { placeId, API_KEY } = req.body;

	const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,formatted_phone_number&key=${API_KEY}`;

	axios
		.get(request)
		.then((data) => {
			res.send(data.data);
		})
		.catch((e) => console.error("=====💡🛑=====", e));
});

module.exports = router;
// always
