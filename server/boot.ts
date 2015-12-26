/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';
import {User} from '../share/model'

var app = express();

["node_modules", "app", "share"].forEach((dir) => {
    app.use('/'+dir, express.static(__dirname + '/../../' + dir));
});
    app.use(express.static(__dirname + '/../../public'));

app.listen(3010, () => {
    var user = new User();
    console.log('start server 3010', user);
});