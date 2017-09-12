var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/series/list', function (req, res, next) {
    console.log('list');
    res.send([
        {
            id: 1,
            name: "Game Of Thrones",
            description: "Umas pá de gente matando e querendo reinar",
            year: 2011,
            rating: 10
        },
        {
            id: 2,
            name: "Dexter",
            description: "Um cara brabo que mata o povo ruim",
            year: 2008,
            rating: 9.6
        }
    ]);
});

app.get('/api/series/get/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send({
        id: req.params.id,
        name: "Dexter",
        description: "Um cara brabo que mata o povo ruim",
        year: 2008,
        rating: 9.6
    });
});

app.post('/api/series/insert', function(req, res) {
    console.log(req.body);
    res.send(true);
});

app.post('/api/series/update', function(req, res) {
    console.log(req.body);
    res.send(true);
});

app.post('/api/series/delete', function(req, res) {
    console.log(req.body);
    res.send(true);
});

app.all('/*', function (req, res, next) {
    res.sendFile('src/index.html', { root: __dirname });
});

var port = 3001;
app.listen(port);
console.log('App listen on port ' + port);