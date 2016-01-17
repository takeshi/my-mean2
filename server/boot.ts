/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/body-parser/body-parser.d.ts" />
'use strict';

import * as express from 'express';
import {db} from './db';
import * as bodyParser from 'body-parser';

let app = express();

['node_modules', 'client', 'share'].forEach((dir) => {
    app.use('/' + dir, express.static('./' + dir));
});

app.use(express.static('./public'));
app.use(express.static('./dist/client'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('start server 3000');
});

let subRouters = ['user', 'tracker', 'ticket']

subRouters.forEach((router) => {
    let subapp = require('./router/' + router);
    app.use('/app/' + router, subapp.app);
});

import {init} from './model/init';
init();