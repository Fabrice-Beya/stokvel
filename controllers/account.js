var web3        = require('web3');
    Account    = require("../models/account");

var webjs = new web3(new web3.providers.WebsocketProvider('https://rinkeby.infura.io/v3/d89c335df8174659b57b35cc7655486e'));

exports.getAll = function(res){
    Account.find({}, function(err, accounts){
        if(err){
            console.log(err);
        } else {
            res.json(accounts);
        }
    })
}

exports.getAccountById = function(id, res){
    Account.find({_id:id}, function(err, account){
        if(err){
            console.log(err);
        } else {
            res.json(account);
        }
    })
}

exports.getAccountByAddress = function(address, res){
    Account.find({'wallet.address':address}, function(err, account){
        if(err){
            console.log(err);
        } else {
            res.json(account);
        }
    })
}

exports.createAccount = function(account, res){
    Account.create(account, function(err, newAccount){
        if(err){
            console.log(err);
        } else {
            newAccount.wallet = webjs.eth.accounts.create();
            newAccount.save();
            res.json(newAccount);
        }
    })
}

exports.createAccounts = function(req, res){
    req.body.forEach(account => {
        exports.createAccount(account);
    });
    exports.getAll(res);
}

exports.updateAccount = function(account, res){
    Account.findOneAndUpdate({_id:account._id}, account, function(err, updatedAccount){
        if(err){
            console.log(err);
        } else {
            exports.getAccountById(account._id, res);
        }
    })
}

exports.deleteAccount = function(id, res){
    Account.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllAccount = function(res){
    Account.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports