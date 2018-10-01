var web3        = require('web3');
    Account    = require("../models/account"),
    Stokvel    = require("../models/stokvel"),
    AccountController = require("../controllers/account");

var webjs = new web3(new web3.providers.WebsocketProvider('https://rinkeby.infura.io/v3/d89c335df8174659b57b35cc7655486e'));

exports.getAll = function(res){
    Stokvel.find({}, function(err, stokvels){
        if(err){
            console.log(err);
        } else {
            res.json(stokvels);
        }
    })
}

exports.getAllMembers = function(id, res){
    Stokvel.find({_id:id}, function(err, stokvel){
        if(err){
            console.log(err);
        } else {
            res.json(stokvel.members);
        }
    })
}

exports.getStokvelById = function(id, res){
    Stokvel.find({_id:id}, function(err, stokvels){
        if(err){
            console.log(err);
        } else {
            res.json(stokvels);
        }
    })
}

exports.getStokvelsByMember = function(id, res){
    Stokvel.find({'members._id':id}, function(err, stokvels){
        if(err){
            console.log(err);
        } else {
            res.json(stokvels);
        }
    })
}

exports.getStokvelsByManager = function(id, res){
    Stokvel.find({'manager.id':id}, function(err, stokvels){
        if(err){
            console.log(err);
        } else {
            res.json(stokvels);
        }
    })
}

exports.getStokvelManager = function(id, res){
    Stokvel.find({_id:id}, function(err, stokvels){
        if(err){
            console.log(err);
        } else {
            res.json(stokvels.manager);
        }
    })
}

exports.createStokvel = function(stokvel, res){
    Stokvel.create(stokvel, function(err, newStokvel){
        if(err){
            console.log(err);
        } else {
            newStokvel.wallet = webjs.eth.accounts.create();
            newStokvel.save();
            res.json(newStokvel);
        }
    })
}

exports.createStokvels = function(req, res){
    req.body.forEach(stokvel => {
        exports.createAccount(stokvel);
    });
    exports.getAll(res);
}

exports.updateStokvel = function(stokvel, res){
    Stokvel.findOneAndUpdate({_id:stokvel._id}, stokvel, function(err, updatedStokvel){
        if(err){
            console.log(err);
        } else {
            exports.getStokvelById(updatedStokvel._id, res);
        }
    })
}

exports.deleteStokvel = function(id, res){
    Stokvel.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllStokvel = function(res){
    Stokvel.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.joinStokvel = function(id, res){

   
    Account.find({_id:id}, function(err, account){
        if(err){
            console.log(err);
        } else {
            Stokvel.findOne({_id:id}, account, function(err, updatedStokvel){
                if(err){
                    console.log(err);
                } else {
                    updatedStokvel.members.push(account);
                    updatedStokvel.save();
                    exports.getStokvelById(updatedStokvel._id, res);
                }
            })
        }
    })
}

exports.leaveStokvel = function(id,account, res){
    Stokvel.findOne({_id:id}, account, function(err, updatedStokvel){
        if(err){
            console.log(err);
        } else {
            updatedStokvel.members.pop(account);
            updatedStokvel.save();
            exports.getStokvelById(updatedStokvel._id, res);
        }
    })
}

module.exports = exports