module.exports = function(app){
    app.get('/api/series/list', function (req, res, next) {
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
        res.send({
            id: req.params.id,
            name: "Dexter",
            description: "Um cara brabo que mata o povo ruim",
            year: 2008,
            rating: 9.6
        });
    });
    
    app.post('/api/series/insert', function(req, res) {
        res.send(true);
    });
    
    app.post('/api/series/update', function(req, res) {
        res.send(true);
    });
    
    app.post('/api/series/delete', function(req, res) {
        res.send(true);
    });
}