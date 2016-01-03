/// <reference path="../typings/tsd.d.ts" />
"use strict";

import * as express from 'express';
import {db} from './db';
import * as bodyParser from 'body-parser';

var app = express();

["node_modules", "client", "share"].forEach((dir) => {
    app.use('/' + dir, express.static('./' + dir));
});

app.use(express.static('./public'));
app.use(express.static('./dist/client'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('start server 3000');
});

var subRouters = ['user']

subRouters.forEach((router) => {
    var subapp = require('./router/' + router);
    app.use('/app/' + router, subapp.app);
});

import {init} from './model/init';
init();