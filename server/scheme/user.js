const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheme = new Schema(
  {
    name: String,
    password: String,
    nhlTeams: Array, // [TODO: fix this type]
  },
  { versionKey: false }
);

const User = mongoose.model("User", userScheme);

module.exports = User;
