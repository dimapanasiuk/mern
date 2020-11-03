const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheme = new Schema(
  {
    name: String,
    passport: String,
  },
  { versionKey: false }
);

const User = mongoose.model("User", userScheme);

module.exports = User;
