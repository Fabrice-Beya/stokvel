var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    port                = process.env.PORT || 3001

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.send("Welcome to stokvel api");
})

app.listen(port, function(){
    console.log("api server is live")
})