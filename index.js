var express = require("express"),
cors = require("cors");
var app = express();
app.use(cors());
var express = require("express");
var app = express();
app.get("/", function(request, response){
    response.send("hello, Node.js!");
});
app.listen(591);

app.get("/folder/page", function(request, response) {
    var x = request.query.foo;
    response.send({ foo: x });
});

