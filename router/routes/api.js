/* ************************************************************************ */
/*
    Server API Routing -


    NOTE: The module arguments are required. And your code will use them to 
    access the Express application object, database object, and the root path 
    of the application.
*/
module.exports = function(app, db, approot) {

    var path = require('path');

    /* ******************************************************************** */
    /*
        GET /api/saved - 
    */
    app.get('/api/saved', function(req, res) {
        console.log('get - /api/saved');
        // respond with all saved articles
        db.ArticleModel.find({'deleted': false})
        .exec(function (err, saved) {
            if(err) throw err;
            var list = JSON.parse(JSON.stringify(saved));
            console.log(list);
            res.json(list);
        });
    });

    /*
        POST /api/saved - 
    */
    app.post('/api/saved', function(req, res) {
        console.log(req.body);

        // use 'headline' and see if it's already
        // been saved, if so then do nothing.
        db.ArticleModel.findOne({'headline': req.body.headline})
        .exec(function (err, doc) {
            if(err) throw err;
            // doc will be null if not found
            if(!doc) {
                var tmp = new db.ArticleModel(req.body);
                tmp.save(function (err, doc) {
                    if (err) throw err;
                    // this will redirect to GET /api/saved
                    res.redirect('/api/saved');
                });
            } else {
                // this will redirect to GET /api/saved
                res.redirect('/api/saved');
            }
        });
    });

    /*
        DELETE /api/saved - 
    */
    app.delete('/api/saved', function(req, res) {
        console.log(req.body);
    });
};
