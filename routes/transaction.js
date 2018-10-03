var express     = require("express"),
    router      = express.Router(),
    TransactionController = require("../controllers/transaction");

// get all 
router.get("/", function(req, res){
    TransactionController.getAll(res);
})

// get by id
router.get("/:id", function(req, res){
    TransactionController.getTransactionById(req.params.id, res);
})

// get all by address
router.get("/address/:id", function(req, res){
    TransactionController.getTransactionsByAddress(req.params.id, res);
})

// post new  
router.post("/", function(req, res){
    TransactionController.createTransaction(req.body, res);
})

// post new  
router.post("/transactions", function(req, res){
    TransactionController.createTransactions(req.body, res);
})

// put  
router.put("/", function(req, res){
    TransactionController.updateTransaction(req.body, res);
})

// delete by id
router.delete("/:id", function(req, res){
    TransactionController.deleteTransaction(req.params.id, res);
})

// delete all  
router.delete("/delete/all", function(req, res){
    TransactionController.deleteAllTransaction(res);
})

module.exports = router;