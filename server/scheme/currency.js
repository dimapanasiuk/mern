const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


const Schema = mongoose.Schema;

const currencyScheme = new Schema(
    {
        link: { type: Schema.Types.ObjectId, ref: 'User' },
        basicCurrency: String,
        currencies: Array,
        dateStart: String,
        dateEnd: String,
    },
    { versionKey: false }
);

// const Currency = mongoose.model("Currency", currencyScheme);
currencyScheme.plugin(findOrCreate);

const Currency = mongoose.model('Currency', currencyScheme);

module.exports = Currency;
// module.exports = Cur;