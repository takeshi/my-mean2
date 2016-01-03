export {User} from '../../share/model';
import {User} from '../../share/model';
import {db} from '../db';
import * as sequelize from 'sequelize';

"use strict";

export var UserRepository = db.define<User, {}>('user', {
    email: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING,
        get: () => {
            return '*****';
        }
    }
});
