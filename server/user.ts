import * as express from 'express';
import * as user from './model/user';

export var app = express();


app.get('/', (req, res) => {
    console.log('/user');
    user.UserModel.find({}, (err, users) => {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(users);
    });
});