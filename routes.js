// js file som indeholder mine routes

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        console.log(req.query.page);
        res.json({
            text: "Hello World, et eller andet"
        })
    })

    app.get('/api/test/:id', (req, res) => {
        console.log(req.params.id);
        res.json({
            param: req.params.id
        })
    })


    app.get('/api/profil', (req, res) => {
        res.json({
            fornavn: "Jann",
            efternavn: "Rasmussen",
            by: "Frederiksberg",
            alder: "23"
        })
    })

    app.get('/api/route1', (req, res) => {
        res.json({
            text: "this is my 3th route"
        })
    })

    app.get('/api/route2', (req, res) => {
        res.json({
            text: "i dunno what to write"
        })
    })


    app.post('/api/formular', (req, res) => {
        res.json({
            besked: "data blev modtaget",
            fornavn: req.body.fornavn,
            efternavn: req.body.efternavn
        });
    });
}