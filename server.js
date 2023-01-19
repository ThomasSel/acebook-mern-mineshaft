var express = require('express');
var app = express();
app.use(express.static(__acebook-mern-mineshaft + '/'));
app.listen(process.env.PORT || 8080);