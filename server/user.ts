import * as express from 'express';
import * as User from './model/user';
import {JsonUtil} from './util/json';
import * as validator from 'validator';
import {Validator, ValidationResult} from '../share/util/validator';

export var app = express();

app.get('/', (req, res) => {
    console.log('/user');
    User.UserModel.find({}, JsonUtil.sendJson(req, res));
});

app.post('/', (req, res) => {

    var user: User.IUser = req.body;

    var result = Validator.validate(User.User, user);
    res.json(result);
    
    // User.UserModel.create(user, JsonUtil.sendJson(req, res));

});