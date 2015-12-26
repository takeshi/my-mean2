/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';
import * as mongo from './mongo';

var app = express();

mongo.init();

["node_modules", "app", "share"].forEach((dir) => {
    app.use('/' + dir, express.static(__dirname + '/../../' + dir));
});

app.use(express.static(__dirname + '/../../public'));

app.listen(3010, () => {
    console.log('start server 3010');
});

import * as user from './user';
app.use('/user', user.app);
