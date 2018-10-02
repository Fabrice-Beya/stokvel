var mongoose    = require("mongoose");

var transactionSchema = mongoose.Schema({
   from : Object,
   to: Object,
   value: Number,
   date: Date,
   status: String,
   reference: String
});

module.exports = mongoose.model("Transaction", transactionSchema);