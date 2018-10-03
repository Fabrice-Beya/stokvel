var express     = require("express"),
    router      = express.Router(),
    ProposalController = require("../controllers/proposal");

// get all 
router.get("/", function(req, res){
    ProposalController.getAll(res);
})

// get by id
router.get("/:id", function(req, res){
    ProposalController.getProposalById(req.params.id, res);
})

// get all per address
router.get("/address/:id", function(req, res){
    ProposalController.getProposalsByAddress(req.params.id, res);
})

// post new  
router.post("/", function(req, res){
    ProposalController.createProposal(req.body, res);
})

// post new  
router.post("/proposals", function(req, res){
    ProposalController.createProposals(req.body, res);
})

// put  
router.put("/", function(req, res){
    ProposalController.updateProposal(req.body, res);
})

// vote 
router.put("/vote/:id", function(req, res){
    ProposalController.voteOnProposalId(req.params.id,req.body, res);
})

// delete by id
router.delete("/:id", function(req, res){
    ProposalController.deleteProposal(req.params.id, res);
})

// delete all  
router.delete("/delete/all", function(req, res){
    ProposalController.deleteAllProposal(res);
})

module.exports = router;