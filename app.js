(function (){
    'use strict';
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 5000;
    app.use(require('express-markdown')({
        directory: __dirname + '/'
    }));

    /**
     * Use static files
     */
    app.use(express.static('./'));

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(port, function (err) {
        if (err) {
            throw err;
        }
        console.log('Running server on ' + port);
    });
}());
