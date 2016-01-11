/// <reference path="../../typings/sequelize/sequelize" />
import * as sequelize from 'sequelize';

export function toDefineAttribute(clazz: any): sequelize.DefineAttributes {
    if (!clazz._defineAttribute) {
        clazz._defineAttribute = {};
    }
    return clazz._defineAttribute;
}

export interface BelongsRelation {
    name: string;
    options: sequelize.AssociationOptionsBelongsTo;
    type?: any;
}

export function toRelations(clazz: any, type: string): BelongsRelation[] {
    if (!clazz._relations) {
        clazz._relations = {};
    }
    if (!clazz._relations[type]) {
        clazz._relations[type] = [];
    }
    return clazz._relations[type];
}

function relation(instance: any, field: string, options: sequelize.AssociationOptions, type: string) {

    var relations = toRelations(instance.constructor, type);
    var relation: BelongsRelation = {
        name: field,
        options: options
    };
    relations.push(relation);
    return relation;

}

export function BelongsTo(type: string, options?: sequelize.AssociationOptionsBelongsTo) {
    return function(instance: any, field: string) {
        relation(instance, field, options, 'belongs');
    }
}

export function HasMany(type: string, options?: sequelize.AssociationOptionsHasMany) {
    return function(instance: any, field: string) {
        var r = relation(instance, field, options, 'hasMany');
        r.type = type;
    }
}


export function Persistence(option: string | sequelize.DataTypeAbstract | sequelize.DefineAttributeColumnOptions) {
    return function(instance: any, field: string) {
        var attr = toDefineAttribute(instance.constructor);
        attr[field] = option;
    }
}

export interface ModelBase {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}