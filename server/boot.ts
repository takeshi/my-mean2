/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';
import * as mongo from './mongo';
import * as bodyParser from 'body-parser';

var app = express();

mongo.init();

["node_modules", "client", "share"].forEach((dir) => {
    app.use('/' + dir, express.static('./' + dir));
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(express.static('./dist/client'));

app.listen(3010, () => {
    console.log('start server 3010');
});

import * as user from './user';
app.use('/app/user', user.app);
