var express     = require("express"),
    router      = express.Router(),
    AccountController = require("../controllers/account");

// get all accounts
router.get("/", function(req, res){
    AccountController.getAll(res);
})

// get account by id
router.get("/:id", function(req, res){
    AccountController.getAccountById(req.params.id, res);
})

// get account by address
router.get("/address/:id", function(req, res){
    AccountController.getAccountByAddress(req.params.id, res);
})

// post new account 
router.post("/", function(req, res){
    AccountController.createAccount(req.body, res);
})

// post new accounts 
router.post("/accounts", function(req, res){
    AccountController.createAccounts(req.body, res);
})

// put account 
router.put("/", function(req, res){
    AccountController.updateAccount(req.body, res);
})

// delete account by id
router.delete("/:id", function(req, res){
    AccountController.deleteAccount(req.params.id, res);
})

// delete all accounts 
router.delete("/delete/all", function(req, res){
    AccountController.deleteAllAccount(res);
})




module.exports = router;