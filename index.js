var express             = require("express"),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require("body-parser"),
    accountRouter       = require('./routes/account'),
    stokvelRouter       = require('./routes/stokvel'),
    transactionRouter   = require('./routes/transaction'),
    proposalRouter      = require('./routes/proposal'),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    port                = process.env.PORT || 3001

mongoose.connect('mongodb://localhost/stokveldb', { useNewUrlParser: true });

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

//Configure Passport
app.use(require("express-session")({
    secret : "Sight of Light too Bright to Fight",
    resave : false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy( Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.get("/", function(req, res){
    res.send("Welcome to stokvel api");
})

app.use("/api/account", accountRouter);
app.use("/api/stokvel", stokvelRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/proposal", proposalRouter);

app.listen(port, function(){
    console.log("Stokvel api server is live")
})