'use strict';

import {User} from './user';
import {Tracker} from './tracker'
import {Ticket} from './ticket'
import * as db from './db';

import * as sequelize from 'sequelize';

export class TicketHistory implements db.ModelBase {

    @db.BelongsTo('User')
    updateUser: User;
    updateUserId: number;

    @db.Persistence({
        type: sequelize.NUMERIC
    })
    version: number;

    @db.BelongsTo('Ticket')
    ticket: Ticket;
    ticketId: number;

}