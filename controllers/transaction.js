var web3                    = require('web3');
    Account                 = require("../models/account"),
    Stokvel                 = require("../models/stokvel"),
    Transaction             = require("../models/transaction")
    AccountController       = require("../controllers/account"),
    TransactionController   = require("../controllers/account");

var webjs = new web3(new web3.providers.WebsocketProvider('https://rinkeby.infura.io/v3/d89c335df8174659b57b35cc7655486e'));

exports.getAll = function(res){
    Transaction.find({}, function(err, transactions){
        if(err){
            console.log(err);
        } else {
            res.json(transactions);
        }
    })
}

exports.getTransactionById = function(id, res){
    Transaction.find({_id:id}, function(err, transactions){
        if(err){
            console.log(err);
        } else {
            res.json(transactions);
        }
    })
}

exports.getTransactionsByAddress = function(address, res){
    Transaction.find({$or:[{'from.address':address},{'to.address':address}]}, function(err, transactions){
        if(err){
            console.log(err);
        } else {
            res.json(transactions);
        }
    })
}

exports.createTransaction = function(transaction, res){
    Transaction.create(transaction, function(err, newTransaction){
        if(err){
            console.log(err);
        } else {
            let w = webjs.eth.accounts.create();
            //This will come from the blockchain
            newTransaction.reference = w.address;
            newTransaction.save();
            res.json(newTransaction);
        }
    })
}

exports.createTransactions = async function(transactions, res){
    await transactions.forEach(transaction => {
        Transaction.create(transaction, function(err, newTransaction){
            if(err){
                console.log(err);
            } else {
            }
        })
    });
    exports.getAll(res);
}

exports.updateTransaction = function(transaction, res){
    Transaction.findOneAndUpdate({_id:transaction._id}, transaction, function(err, updatedTransaction){
        if(err){
            console.log(err);
        } else {
            exports.getTransactionById(updatedTransaction._id, res);
        }
    })
}

exports.deleteTransaction = function(id, res){
    Transaction.remove({_id:id}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

exports.deleteAllTransaction = function(res){
    Transaction.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            exports.getAll(res);
        }
    })
}

module.exports = exports