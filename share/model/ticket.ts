/// <reference path="../../node_modules/reflect-metadata/reflect-metadata" />
'use strict';

import {User} from './user';
import {Tracker} from './tracker';
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
    static TRACKER: sequelize.IncludeOptions;

    @db.BelongsTo('User', {
        as: 'author'
    })
    author: User;
    authorId: number;
    static AUTHOR: sequelize.IncludeOptions;

    @db.BelongsTo('User', {
        as: 'creator'
    })
    creator: User;
    creatorId: number;
    static CREATOR: sequelize.IncludeOptions;

    @db.HasMany('TicketHistory', {
        as: 'histories'
    })
    histories: TicketHistory[];
    static HISTORIES: sequelize.IncludeOptions;
}