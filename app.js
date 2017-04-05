(function (){
    'use strict';
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 5000;
    app.use(require('express-markdown')({
        directory: __dirname + '/public'
    }));

    /**
     * Use static files
     */
    app.use(express.static('./public'));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.listen(port, function (err) {
        if (err) {
            throw err;
        }
        console.log('Running server on ' + port);
    });
}());
