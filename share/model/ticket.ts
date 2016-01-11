/// <reference path="../../node_modules/reflect-metadata/reflect-metadata" />

"use strict";

import * as Reflect from 'reflect-metadata';

import {User} from './user';
import {Tracker} from './tracker'
import {TicketHistory} from './ticket_history';
import * as db from './db';

import * as sequelize from 'sequelize';

export class Ticket implements db.ModelBase {

    @db.Persistence({
        type: sequelize.STRING
    })
    desc: string;

    @db.Persistence({
        type: sequelize.STRING
    })
    title: string;

    @db.BelongsTo('Tracker')
    tracker: Tracker;
    trackerId: number = 1;

    @db.BelongsTo('User', {
        as: 'author'
    })
    author: User;
    authorId: number;


    @db.BelongsTo('User', {
        as: 'creator'
    })
    creator: User;
    creatorId: number;

    @db.HasMany('TicketHistory')
    histories: TicketHistory[];

}