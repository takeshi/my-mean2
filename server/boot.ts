/// <reference path="../typings/tsd.d.ts" />
import * as angular2 from 'angular2/core';

import * as express from 'express';
import * as mongo from './mongo';
import * as bodyParser from 'body-parser';

var app = express();

mongo.init();

["node_modules", "client", "share"].forEach((dir) => {
    app.use('/' + dir, express.static('./' + dir));
});

app.use(express.static('./public'));
app.use(express.static('./dist/client'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(3010, () => {
    console.log('start server 3010');
});

var subRouters = ['user']

subRouters.forEach((router) => {
    var subapp = require('./' + router);
    app.use('/app/' + router, subapp.app);
});