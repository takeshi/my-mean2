/// <reference path="../typings/sequelize/sequelize.d.ts" />
/// <reference path="../node_modules/reflect-metadata/reflect-metadata" />
'use strict';

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
    return db.define<K, V>(_.camelCase(model.name), toDefineAttribute(model));
}

function getRepository(clazz: any) {
    return db.model(_.camelCase(clazz.name));
}


function getRepositoryByField(clazz: any, field: string) {
    let type = Reflect.getMetadata('design:type', new clazz, field);

    console.log(clazz.name, field, type);
    return db.model(_.camelCase(clazz.name));
}


export function createRelation(clazz: any) {

    let repository = getRepository(clazz);

    for (let relation of toRelations(clazz, 'belongs')) {
        let ref = db.model(_.camelCase(relation.type));
        repository.belongsTo(ref, relation.options);
        clazz[relation.name.toUpperCase()] = {
            model: ref,
            as: relation.name
        };
    }

    for (let relation of toRelations(clazz, 'hasMany')) {
        let ref = db.model(_.camelCase(relation.type));
        repository.hasMany(ref, relation.options);
        clazz[relation.name.toUpperCase()] = {
            model: ref,
            as: relation.name
        };
    }
    console.log(clazz);

}