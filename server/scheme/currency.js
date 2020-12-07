const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const currencyScheme = new Schema(
    {
        link: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        basicCurrency: String,
        currencies: Array,
        dateStart: Date,
        dateEnd: Date,
    },
    { versionKey: false }
);

const Currency = mongoose.model("Currency", currencyScheme);

module.exports = Currency;
