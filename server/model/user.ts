"use strict";

import * as share from '../../share/model/user';
import * as sequelize from 'sequelize';
import {db} from '../db';

export interface User extends share.User, sequelize.Instance<share.User, {}> {
}

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

