var mongoose    = require("mongoose");

var accountSchema = mongoose.Schema({
   name : String,
   phoneNumber: String,
   balance: Number,
   wallet: Object,
});

module.exports = mongoose.model("Account", accountSchema);