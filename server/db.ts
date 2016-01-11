/// <reference path="../typings/sequelize/sequelize.d.ts" />
/// <reference path="../node_modules/reflect-metadata/reflect-metadata" />

import * as sequelize from 'sequelize';
export {toDefineAttribute} from '../share/model/db';
import {toDefineAttribute} from '../share/model/db';
import {toRelations} from '../share/model/db';
import 'reflect-metadata';
import * as _ from 'lodash';

export var db = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    
    // SQLite only
    storage: 'database.sqlite'
});

export function createRepository<K, V>(model: any) {
    return db.define<K, V>(model.name, toDefineAttribute(model));
}

function getRepository(clazz: any) {
    return db.model(clazz.name);
}


function getRepositoryByField(clazz: any, field: string) {
    var type = Reflect.getMetadata('design:type', new clazz, field);

    console.log(clazz.name, field, type);
    return db.model(type.name);
}


export function createRelation(clazz: any) {
    var repository = getRepository(clazz);

    for (var relation of toRelations(clazz, 'belongs')) {
        var ref = getRepositoryByField(clazz, relation.name);
        repository.belongsTo(ref, relation.options);
    }

    // for (var relation of toRelations(clazz, 'hasMany')) {
    //     var ref = getRepository(relation.type);
    //     repository.hasMany(ref, relation.options);
    // }

}