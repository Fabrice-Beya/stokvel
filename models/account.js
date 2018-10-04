var mongoose               = require("mongoose"),
    passportLocalMongoose  = require("passport-local-mongoose");

var accountSchema = mongoose.Schema({
   name : String,
   phoneNumber: String,
   balance: Number,
   wallet: Object,
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", accountSchema);