const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')

const Schema = mongoose.Schema;

const mapItem = new Schema(
  {
    label: String,
    description: String,
    location: Schema.Types.Mixed
  },
  { versionKey: false }
);

const mapScheme = new Schema(
  {
    link: { type: Schema.Types.ObjectId, ref: 'User' },
    places: Array // make array of
  },
  { versionKey: false }
);

mapScheme.plugin(findOrCreate);

const Map = mongoose.model('Map', mapScheme);

module.exports = Map;
