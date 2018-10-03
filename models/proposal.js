var mongoose    = require("mongoose");

var proposalSchema = mongoose.Schema({
   title : {type: String, default:''},
   description: {type: String, default:''},
   proposer: {type: String, default:''},
   amount: {type: Number, default:0},
   numberOfVotes: {type: Number, default:0},
   votes: [{
       voter: String,
       position: Boolean
   }],
   isPassed: {type: Boolean, default:false},
   isExecuted:  {type: Boolean, default:false},
   dateProposed: Date,
   datePassed: Date,
   dateExecuted: Date,
});

module.exports = mongoose.model("Proposal", proposalSchema);