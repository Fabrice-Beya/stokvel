var mongoose    = require("mongoose");

var stokvelSchema = mongoose.Schema({
   title : String,
   description : String,
   profileUrl : String,
   constitution: Object,
   members: [{
    id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Account"
    },
    name: String
    }],
    manager : {
        id:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Account"
        }
    },
   wallet: Object,
   balance: Number
});

module.exports = mongoose.model("Stokvel", stokvelSchema);