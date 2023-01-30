var express = require("express");
var app     = express();

app.use(express.static("dist/uk_pray_ang"));
app.get("/", function (req, res) {
    res.redirect("/")
});

app.listen(4200);