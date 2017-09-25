module.exports = function (app, db) {
    var series = db.collection('series');

    app.get('/api/series/list', function (req, res, next) {
        series.find({}).toArray(function (err, docs) {
            res.send(docs);
        });
    });

    app.get('/api/series/get/:id', function (req, res, next) {
        var filter = { id: parseInt(req.params.id) };
        series.findOne(filter, function (err, docs) {
            res.send(docs);
        });
    });

    app.post('/api/series/insert', function (req, res) {
        series.find({}).toArray(function (err, docs) {
            if (!err) {
                var item = req.body;
                item.id = docs.length + 1;

                series.insertOne(req.body, function (err, docs) {
                    res.send(err == null);
                });
            }
            else {
                res.send(false);
            }
        });
    });

    app.post('/api/series/update', function (req, res) {
        var obj = req.body;
        var filter = {id: obj.id};
        
        delete obj._id;
        series.updateOne(filter, obj, function (err, docs) {
            res.send(err == null);
        });
    });

    app.post('/api/series/delete', function (req, res) {
        series.deleteOne(req.body, function (err, docs) {
            res.send(err == null);
        });
    });
}