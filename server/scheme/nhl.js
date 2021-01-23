const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const nhlScheme = new Schema(
  {
    link: { type: Schema.Types.ObjectId, ref: "User" },
    teams: Array,
  },
  { versionKey: false }
);

nhlScheme.plugin(findOrCreate);

const Nhl = mongoose.model("Nhl", nhlScheme);

module.exports = Nhl;
