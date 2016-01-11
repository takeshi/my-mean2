/// <reference path="../../typings/validator/validator.d.ts" />
"use strict";

import * as validator from 'validator';
import {Email, Require} from '../util/validator.decorator';
import * as sequelize from 'sequelize';
import * as db from './db';


export class User implements db.ModelBase {
    
    id:number;

    @db.Persistence({
        type: sequelize.STRING
    })
    @Require()
    @Email()
    email: string;

    @db.Persistence({
        type: sequelize.STRING,
        get: () => {
            return '*****';
        }
    })
    @Require()
    password: string;

}