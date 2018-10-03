var express     = require("express"),
    router      = express.Router(),
    StokvelController = require("../controllers/stokvel");

// get all 
router.get("/", function(req, res){
    StokvelController.getAll(res);
})

// get by id
router.get("/:id", function(req, res){
    StokvelController.getStokvelById(req.params.id, res);
})

// get all members
router.get("/members/:id", function(req, res){
    StokvelController.getAllMembers(req.params.id, res);
})

// get all stokvels per member
router.get("/member/:id", function(req, res){
    StokvelController.getAllMembers(req.params.id, res);
})

// get by manager
router.get("/manager/:id", function(req, res){
    StokvelController.getStokvelsByManager(req.params.id, res);
})

// get stokvels manager
router.get("/managed/:id", function(req, res){
    StokvelController.getStokvelManager(req.params.id, res);
})

// post new  
router.post("/", function(req, res){
    StokvelController.createStokvel(req.body, res);
})

// post new  
router.post("/stokvels", function(req, res){
    StokvelController.createStokvels(req.body, res);
})

// put  
router.put("/", function(req, res){
    StokvelController.updateStokvel(req.body, res);
})

// delete by id
router.delete("/:id", function(req, res){
    StokvelController.deleteStokvel(req.params.id, res);
})

// delete all  
router.delete("/delete/all", function(req, res){
    StokvelController.deleteAllStokvel(res);
})

// join 
router.post("/join/:id/:accId", function(req, res){
    StokvelController.joinStokvel(req.params.id,req.params.accId, res);
})

// unjoin
router.post("/unjoin/:id/:accId", function(req, res){
    StokvelController.unJoinStokvel(req.params.id,req.params.accId, res);
})

module.exports = router;