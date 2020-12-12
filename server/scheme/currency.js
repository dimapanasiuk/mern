const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


const Schema = mongoose.Schema;

const currencyScheme = new Schema(
    {
        link: { type: Schema.Types.ObjectId, ref: 'User' },
        basicCurrency: String,
        currencies: Array,
        dateStart: Date,
        dateEnd: Date,
    },
    { versionKey: false }
);

const Currency = mongoose.model("Currency", currencyScheme);
currencyScheme.plugin(findOrCreate);

const Cur = mongoose.model('Cur', currencyScheme);

module.exports = Currency;
module.exports = Cur;