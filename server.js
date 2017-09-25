//Requires section
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb');

app.use('/node_modules', express.static(__dirname + '/node_modules'));  //Include all dependencies in node_modules folder
app.use(express.static(__dirname + '/src'));                            //Incluide src folder
app.use(bodyParser.json());                                             // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));                     // support encoded bodies

//MongoDB initialization
var url = 'mongodb://localhost:27017/test';
mongoClient.connect(url, function (err, db) {
    if (!err) {
        //Controllers
        require('./api/controllers/series')(app, db);

        //Default routing
        app.all('*', function (req, res) {
            res.sendFile('src/index.html', { root: __dirname });
        });
    } else {
        console.log('An error occurred on MongoDb connection');
    }
});

//Hosting settings
var port = 3001;
app.listen(port);
console.log('App listen on port ' + port);