/// <reference path="../typings/sequelize/sequelize.d.ts" />
import * as sequelize from 'sequelize';

export var db = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    
    // SQLite only
    storage: 'database.sqlite'
});