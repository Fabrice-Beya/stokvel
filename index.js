var express             = require("express"),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require("body-parser"),
    accountRouter       = require('./routes/account'),
    stokvelRouter       = require('./routes/stokvel'),
    transactionRouter   = require('./routes/transaction'),
    port                = process.env.PORT || 3001

mongoose.connect('mongodb://localhost/stokveldb', { useNewUrlParser: true });

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.send("Welcome to stokvel api");
})

app.use("/api/account", accountRouter);
app.use("/api/stokvel", stokvelRouter);
app.use("/api/transaction", transactionRouter);

app.listen(port, function(){
    console.log("stokvel api server is live")
})