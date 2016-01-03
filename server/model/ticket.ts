"use strict";

import * as share from '../../share/model/ticket';

import {UserRepository} from './user';
import {TrackerRepository} from './tracker';
import * as sequelize from 'sequelize';
import {db} from '../db';

export interface Ticket extends share.Ticket, sequelize.Instance<share.Ticket,{}> {
}

export var TicketRepository = db.define<Ticket, {}>('ticket', {
    desc: {
        type: sequelize.STRING
    }
});

TicketRepository.belongsTo(UserRepository, { as: 'author' });
TicketRepository.belongsTo(TrackerRepository, { as: 'tracker' });
