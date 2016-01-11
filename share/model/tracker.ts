"use strict";
import 'reflect-metadata';

import * as db from './db';
import * as sequelize from 'sequelize';

export class Tracker implements db.ModelBase {

    @db.Persistence({
        type: sequelize.STRING
    })
    name: string

}