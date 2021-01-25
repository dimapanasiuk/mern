const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const currency = {value: String, label:String, id: String }; 

const Schema = mongoose.Schema;

// const currency2 = new Schema( if u want to get new _id field (change currency)
//   {
//     value: String,
//     label:  String,
//     id: String,
//   }
// );

const currencyScheme = new Schema(
  {
    link: { type: Schema.Types.ObjectId, ref: "User" },
    basicCurrency: String,
    currencies: [currency],
    dateStart: String,
    dateEnd: String,
  },
  { versionKey: false }
);

currencyScheme.plugin(findOrCreate);

const Currency = mongoose.model("Currency", currencyScheme);

module.exports = Currency;
