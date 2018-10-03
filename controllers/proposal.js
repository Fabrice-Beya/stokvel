var web3                    = require('web3');
    Proposal                = require("../models/proposal");

var webjs = new web3(new web3.providers.WebsocketProvider('https://rinkeby.infura.io/v3/d89c335df8174659b57b35cc7655486e'));

exports.getAll = function(res){
    Proposal.find({}, function(err, proposals){
        if(err){
            console.log(err);
        } else {
            res.json(proposals);
        }
    })
}

exports.getProposalById = function(id, res){
    Proposal.find({_id:id}, function(err, proposals){
        if(err){
            console.log(err);
        } else {
            res.json(proposals);
        }
    })
}

exports.getProposalsByAddress = function(address, res){
    Proposal.find({"proposer":address}, function(err, proposals){
        if(err){
            console.log(err);
        } else {
            res.json(proposals);
        }
    })
}

exports.createProposal = function(proposal, res){
    Proposal.create(proposal, function(err, newProposal){
        if(err){
            console.log(err);
        } else {
            res.json(newProposal);
        }
    })
}

exports.createProposals = async function(proposals, res){
    await proposals.forEach(proposal => {
        Proposal.create(proposal, function(err, newProposals){
            if(err){
                console.log(err);
            } else {
            }
        })
    });
    exports.getAll(res);
}

exports.updateProposal =  function(proposal, res){
     Proposal.findOneAndUpdate({_id:proposal._id}, proposal, function(err, updatedProposal){
        if(err){
            console.log(err);
        } else {
            exports.getProposalById(updatedProposal._id, res);
        }
    })
}

exports.voteOnProposalId = function(proposalId,vote, res){
    Proposal.find({_id:proposalId}, function(err, proposal){
        if(err){
            console.log(err);
        } else {
            proposal[0].votes.push(vote);
            proposal[0].numberOfVotes =  proposal[0].numberOfVotes + 1;
            proposal[0].save();
            res.json(proposal[0])
        }
    })
}

exports.deleteProposal = function(id, res){
    Proposal.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllProposal = function(res){
    Proposal.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports