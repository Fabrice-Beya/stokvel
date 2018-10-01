var mongoose    = require("mongoose");

var accountSchema = mongoose.Schema({
   name : String,
   phoneNumber: String,
   wallet: Object,
});

module.exports = mongoose.model("Account", accountSchema);