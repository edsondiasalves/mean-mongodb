var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./api/controllers/series')(app);
    
app.all('/*', function (req, res, next) {
    res.sendFile('src/index.html', { root: __dirname });
});

var port = 3001;
app.listen(port);
console.log('App listen on port ' + port);