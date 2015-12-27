import * as express from 'express';
import {User, UserModel} from './model/user';
import {JsonUtil} from './util/json';
import * as validator from 'validator';
import {Validator, ValidationResult} from '../share/util/validator';

export var app = express();

app.get('/', (req, res) => {
    console.log('/user');
    UserModel.find({}, JsonUtil.sendJson(req, res));
});

app.post('/', (req, res) => {

    var user: User = req.body;

    var result = Validator.validate(User, user);
    res.json(result);

});